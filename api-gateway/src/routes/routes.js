const { createProxyMiddleware } = require('http-proxy-middleware');
const authMiddleware = require('../../src/middleware/auth-middleware');

const router = require('express').Router();

const proxy = (target) =>
    createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: (path, req) => req.originalUrl,
        on: {
            error: (err, req, res) => {
                res.status(503).json({
                    success: false,
                    message: 'Service sedang tidak tersedia.',
                });
            },
        },
    });

// auth service    
router.use('/api/auth', proxy(process.env.USER_SERVICE_URL));
router.use('/api/users', authMiddleware, proxy(process.env.USER_SERVICE_URL));

//konten edukasi - API
router.use('/api/konten', authMiddleware, proxy(process.env.EDUKASI_SERVICE_URL));

// Video edukasi
router.use('/videos', proxy(process.env.EDUKASI_SERVICE_URL));

// reminder medicine service
router.use('/api/obat', authMiddleware, proxy(process.env.MEDICINE_SERVICE_URL));
router.use('/api/riwayat-obat', authMiddleware, proxy(process.env.MEDICINE_SERVICE_URL));
router.use('/api/jadwal', authMiddleware, proxy(process.env.MEDICINE_SERVICE_URL));

// chatbot service
router.use('/api/chatbot', authMiddleware, proxy(process.env.CHATBOT_SERVICE_URL));

// skrining service
router.use('/api/skrining', authMiddleware, proxy(process.env.SKRINING_SERVICE_URL));

// layanan kesehatan service
router.use('/api/layanan-kesehatan', authMiddleware, proxy(process.env.HEALTH_SERVICE_URL));

module.exports = router;