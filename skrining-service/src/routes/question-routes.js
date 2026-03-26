const express = require('express');
const { getAllQuestions } = require('../controllers/question-controller');
const authMiddleware = require('../middleware/auth-middleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/', getAllQuestions);

module.exports = router;