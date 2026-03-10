const express = require('express');
const { getAllKonten, getKontenById, createKonten, updateKonten, deleteKonten, } = require('../controllers/content-controllers');
const authMiddleware = require('../middleware/auth-middleware');
const { uploadVideo } = require('../middleware/upload-middleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/', getAllKonten);

router.get('/:id', getKontenById);

router.post('/', uploadVideo, createKonten);

router.put('/:id', uploadVideo, updateKonten);

router.delete('/:id', deleteKonten);

module.exports = router;