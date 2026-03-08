const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../models/user');
const { successResponse, errorResponse } = require('../utils/response');

// get profile
const getProfile = async (req, res) => {
    try {

        const user = await User.findById(req.userId).select('-password -__v');
        if (!user) return errorResponse(res, 'User tidak ditemukan', 404);

        return successResponse(res, 'Berhasil mengambil profil', user);
    } catch (err) {
        return errorResponse(res, 'Server error', 500);
    }
};

// update profile
const updateProfile = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errorResponse(res, 'Validasi gagal', 400, errors.array());
    }

    try {
        const { nama_lengkap, no_telepon } = req.body;

        const user = await User.findByIdAndUpdate(
            req.userId,
            { nama_lengkap, no_telepon },
            { returnDocument: 'after', runValidators: true }
        ).select('-password -__v');

        return successResponse(res, 'Profil berhasil diperbarui', user);
    } catch (err) {
        return errorResponse(res, 'Server error', 500);
    }
};

// change password
const changePassword = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errorResponse(res, 'Validasi gagal', 400, errors.array());
    }

    try {
        const { password_lama, password_baru } = req.body;

        const user = await User.findById(req.userId);
        if (!user) return errorResponse(res, 'User tidak ditemukan', 404);

        const isMatch = await user.comparePassword(password_lama);
        if (!isMatch) return errorResponse(res, 'Password lama tidak sesuai', 400);

        user.password = password_baru;
        await user.save();

        return successResponse(res, 'Password berhasil diubah');
    } catch (err) {
        return errorResponse(res, 'Server error', 500);
    }
};

module.exports = { getProfile, updateProfile, changePassword };