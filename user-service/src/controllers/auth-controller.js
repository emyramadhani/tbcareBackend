const User = require('../models/user');
const BlacklistedToken = require('../models/blacklisted-token');
const jwt = require('jsonwebtoken');
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
  // Cek error dari express-validator untuk login juga
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

module.exports = { register, login, logout, validateToken };