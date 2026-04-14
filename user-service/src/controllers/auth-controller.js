const User = require('../models/user');
const BlacklistedToken = require('../models/blacklisted-token');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { successResponse, errorResponse } = require('../utils/response');
const { validationResult } = require('express-validator');

const generateToken = (user) => {
  const expiresIn = process.env.JWT_EXPIRES_IN || '7d';
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn }
  );
};

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(err => err.msg);
    return errorResponse(res, `Validasi gagal: ${errorMessages.join(', ')}`, 400);
  }

  try {
    const { nama_lengkap, email, password, no_telepon, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return errorResponse(res, 'Email sudah terdaftar', 400);
    
    const user = await User.create({ nama_lengkap, email, password, no_telepon, role });
    
    const token = generateToken(user);
    return successResponse(res, 'Registrasi berhasil', { token, id: user._id, email: user.email, role: user.role }, 201);

  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);
      return errorResponse(res, `Validasi gagal: ${messages.join(', ')}`, 400);
    }
    return errorResponse(res, 'Server error', 500);
  }
};

const login = async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(err => err.msg);
    return errorResponse(res, `Validasi gagal: ${errorMessages.join(', ')}`, 400);
  }

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user) return errorResponse(res, 'Email atau password salah', 401);

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return errorResponse(res, 'Email atau password salah', 401);

    const token = generateToken(user);

    return successResponse(res, 'Login berhasil', { token });
  } catch (err) {
    return errorResponse(res, 'Server error', 500);
  }
};

const logout = async (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return errorResponse(res, 'Token tidak ditemukan', 400);

    await BlacklistedToken.create({ token });
    return successResponse(res, 'Logout berhasil');
  } catch (err) {
    if (err.code === 11000) return successResponse(res, 'Logout berhasil (Token sudah ada di blacklist)');
    return errorResponse(res, 'Server error', 500);
  }
};

const validateToken = async (req, res) => {
  try {
    return successResponse(res, 'Token valid', {
      id: req.userId,
      role: req.userRole
    });
  } catch (err) {
    console.error('ERROR validateToken:', err);
    return errorResponse(res, 'Server error saat validasi token', 500);
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return successResponse(res, 'Jika email terdaftar, link reset password akan dikirim.');
    }

    const resetToken = crypto.randomBytes(32).toString('hex');

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = new Date(Date.now() + 3600000); 
    await user.save({ validateBeforeSave: false }); 

    const deepLink = `${process.env.DEEP_LINK_SCHEME}://reset-password?token=${resetToken}`;


    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"TBCare" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: 'Reset Password TBCare',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: auto;">
          <h2 style="color: #2563EB;">Reset Password TBCare</h2>
          <p>Halo <strong>${user.nama_lengkap}</strong>,</p>
          <p>Kami menerima permintaan reset password untuk akun kamu.</p>
          <p>Tap tombol di bawah ini untuk melanjutkan reset password di aplikasi TBCare:</p>
          
          <a href="${deepLink}" 
             style="display:inline-block; margin: 16px 0; padding: 12px 24px;
                    background-color: #2563EB; color: white; text-decoration: none;
                    border-radius: 8px; font-weight: bold;">
            Reset Password
          </a>

          <p style="color: #6B7280; font-size: 13px;">
            Link ini hanya berlaku selama <strong>1 jam</strong>.<br/>
            Jika kamu tidak meminta reset password, abaikan email ini.
          </p>
          <hr/>
          <p style="color: #9CA3AF; font-size: 12px;">TBCare — Aplikasi Kesehatan TB</p>
        </div>
      `,
    });

    return successResponse(res, 'Jika email terdaftar, link reset password akan dikirim.');
  } catch (err) {
    console.error('forgotPassword error:', err);
    return errorResponse(res, 'Server error', 500);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, password_baru } = req.body;

    if (!token || !password_baru) {
      return errorResponse(res, 'Token dan password baru wajib diisi.', 400);
    }

    if (password_baru.length < 6) {
      return errorResponse(res, 'Password baru minimal 6 karakter.', 400);
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: new Date() },
    });

    if (!user) {
      return errorResponse(res, 'Token tidak valid atau sudah kadaluarsa.', 400);
    }

    user.password = password_baru;
    user.resetPasswordToken = null; 
    user.resetPasswordExpires = null;
    await user.save();

    return successResponse(res, 'Password berhasil direset. Silakan login dengan password baru.');
  } catch (err) {
    console.error('resetPassword error:', err);
    return errorResponse(res, 'Server error', 500);
  }
};

module.exports = { register, login, logout, validateToken, forgotPassword, resetPassword };