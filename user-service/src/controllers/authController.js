const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/user');
const BlacklistedToken = require('../models/blacklistedToken');
const { successResponse, errorResponse } = require('../utils/response');


const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );
};

const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errorResponse(res, 'Validasi gagal', 400, errors.array());
    }

    try {
        const { nama_lengkap, email, password, no_telepon } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return errorResponse(res, 'Email sudah terdaftar', 409);
        }

        const user = await User.create({ nama_lengkap, email, password, no_telepon });
        const token = generateToken(user);

        return successResponse(
            res,
            'Registrasi berhasil',
            {
                token,
                user: {
                    id: user._id,
                    nama_lengkap: user.nama_lengkap,
                    email: user.email,
                    no_telepon: user.no_telepon,
                },
            },
            201
        );
    } catch (err) {
        console.error('Error:', err);
        return errorResponse(res, 'Server error', 500);
    }
};


const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errorResponse(res, 'Validasi gagal', 400, errors.array());
    }

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return errorResponse(res, 'Email atau password salah', 401);
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return errorResponse(res, 'Email atau password salah', 401);
        }

        const token = generateToken(user);

        return successResponse(res, 'Login berhasil', {
            token,
            user: {
                id: user._id,
                nama_lengkap: user.nama_lengkap,
                email: user.email,
                no_telepon: user.no_telepon,
                role: user.role,
            },
        });
    } catch (err) {
        console.error('Error:', err);
        return errorResponse(res, 'Server error', 500);
    }
};

const logout = async (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return errorResponse(res, 'Token tidak ditemukan', 400);
    }

    const alreadyBlacklisted = await BlacklistedToken.findOne({ token });
    if (alreadyBlacklisted) {
      return errorResponse(res, 'Token sudah tidak aktif', 400);
    }

    await BlacklistedToken.create({ token });

    return successResponse(res, 'Logout berhasil');
  } catch (err) {
    console.error('Error:', err);
    return errorResponse(res, 'Server error', 500);
  }
};

module.exports = { register, login, logout};