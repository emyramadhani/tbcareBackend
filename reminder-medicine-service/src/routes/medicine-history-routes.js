const express = require('express');
const { body } = require('express-validator');
const {
  confirmMedicine,
  getMedicineHistory,
} = require('../controllers/medicine-history-controller');
const authMiddleware = require('../middleware/auth-middleware');

const router = express.Router();

router.use(authMiddleware);

const confirmValidation = [
  body('id_obat').notEmpty().withMessage('ID obat wajib diisi'),
  body('tanggal')
    .notEmpty()
    .withMessage('Tanggal wajib diisi')
    .isISO8601()
    .withMessage('Format tanggal tidak valid, gunakan format YYYY-MM-DD'),
];

router.post('/', confirmValidation, confirmMedicine);
router.get('/', getMedicineHistory);

module.exports = router;