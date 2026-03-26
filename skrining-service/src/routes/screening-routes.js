const express = require('express');
const { submitScreening, getScreeningHistory, getScreeningDetail, } = require('../controllers/screening-controller');
const authMiddleware = require('../middleware/auth-middleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', submitScreening);

router.get('/', getScreeningHistory);

router.get('/:id', getScreeningDetail);

module.exports = router;