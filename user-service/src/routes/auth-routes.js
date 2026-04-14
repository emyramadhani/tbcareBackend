const express = require('express');
const { body } = require('express-validator');
const { register, login, logout, validateToken, forgotPassword, resetPassword } = require('../controllers/auth-controller');
const authMiddleware = require('../middleware/auth-middleware');

const router = express.Router();

const registerValidation = [
  body('nama_lengkap').trim().notEmpty().withMessage('Nama lengkap wajib diisi'),
  body('email').isEmail().withMessage('Format email tidak valid'),
  body('password').isLength({ min: 6 }).withMessage('Password minimal 6 karakter'),
];

const loginValidation = [
  body('email').isEmail().withMessage('Format email tidak valid'),
  body('password').notEmpty().withMessage('Password wajib diisi'),
];

const forgotPasswordValidation = [
  body('email').isEmail().withMessage('Format email tidak valid'),
];

const resetPasswordValidation = [
  body('token').notEmpty().withMessage('Token wajib diisi'),
  body('password_baru').isLength({ min: 6 }).withMessage('Password baru minimal 6 karakter'),
];

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.post('/logout', authMiddleware, logout); 
router.get('/validate-token', authMiddleware, validateToken);

router.post('/forgot-password', forgotPasswordValidation, forgotPassword);
router.post('/reset-password', resetPasswordValidation, resetPassword);

module.exports = router;