const express = require('express');
const { body } = require('express-validator');
const { register, login, logout, validateToken } = require('../controllers/auth-controller');
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

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.post('/logout', authMiddleware, logout); 

router.get('/validate-token', authMiddleware, validateToken);

module.exports = router;