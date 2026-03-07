const express = require('express');
const { body } = require('express-validator');
const { register, login } = require('../../src/controllers/authController');

const router = express.Router();

// register validation
const registerValidation = [
    body('nama_lengkap').trim().notEmpty().withMessage('Nama lengkap wajib diisi'),
    body('email').isEmail().withMessage('Format email tidak valid'),
    body('password').isLength({ min: 6 }).withMessage('Password minimal 6 karakter'),
];

// login validation
const loginValidation = [
    body('email').isEmail().withMessage('Format email tidak valid'),
    body('password').notEmpty().withMessage('Password wajib diisi'),
];

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);

module.exports = router;