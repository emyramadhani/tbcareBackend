const express = require('express');
const { body } = require('express-validator');
const {
  createObat,
  getAllObat,
  getObatById,
  updateObat,
  deleteObat,
} = require('../controllers/medicine-controller');
const authMiddleware = require('../middleware/auth-middleware');

const router = express.Router();

router.use(authMiddleware);

const obatValidation = [
  body('nama_obat').trim().notEmpty().withMessage('Nama obat wajib diisi'),
  body('dosis').trim().notEmpty().withMessage('Dosis wajib diisi'),
  body('waktu_minum')
    .isArray({ min: 1 })
    .withMessage('Waktu minum wajib diisi minimal 1 waktu'),
  body('waktu_minum.*')
    .matches(/^([0-1]\d|2[0-3]):[0-5]\d$/)
    .withMessage('Format waktu minum harus HH:MM, contoh: 07:00'),
];

router.post('/', obatValidation, createObat);
router.get('/', getAllObat);
router.get('/:id', getObatById);
router.put('/:id', obatValidation, updateObat);
router.delete('/:id', deleteObat);

module.exports = router;