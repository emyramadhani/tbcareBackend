const express = require('express');
const { body } = require('express-validator');
const { getProfile, updateProfile, changePassword } = require('../../src/controllers/profileController');
const authMiddleware = require('../../src/middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/profile', getProfile);

router.put(
    '/profile',
    [body('nama_lengkap').trim().notEmpty().withMessage('Nama lengkap wajib diisi')],
    updateProfile
);

router.put(
    '/change-password',
    [
        body('password_lama').notEmpty().withMessage('Password lama wajib diisi'),
        body('password_baru').isLength({ min: 6 }).withMessage('Password baru minimal 6 karakter'),
    ],
    changePassword
);

module.exports = router;