const express = require('express');
const { saveChat, getChatSessions, getChatDetailBySession, deleteSession, } = require('../controllers/chat-controller');
const authMiddleware = require('../middleware/auth-middleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', saveChat);
router.get('/history', getChatSessions);
router.get('/history/:session_id', getChatDetailBySession);
router.delete('/history/:session_id', deleteSession);

module.exports = router;