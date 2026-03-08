const express = require('express');
const { getJadwalHariIni } = require('../controllers/schedule-controller');
const authMiddleware = require('../middleware/auth-middleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/hari-ini', getJadwalHariIni);

module.exports = router;