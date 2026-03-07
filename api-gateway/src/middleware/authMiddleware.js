const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Akses ditolak. Token tidak ditemukan.',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.headers['x-user-id'] = decoded.id;
        req.headers['x-user-email'] = decoded.email;
        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: 'Token tidak valid atau sudah expired.',
        });
    }
};

module.exports = authMiddleware;