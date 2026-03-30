const jwt = require('jsonwebtoken');
const BlacklistedToken = require('../models/blacklisted-token');
const { errorResponse } = require('../utils/response');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return errorResponse(res, 'Akses ditolak. Token tidak ditemukan.', 401);
  }

  try {
    const isBlacklisted = await BlacklistedToken.findOne({ token });
    if (isBlacklisted) {
      return errorResponse(res, 'Sesi telah berakhir (Logout). Silakan login kembali.', 401);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    req.userRole = decoded.role;
    
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return errorResponse(res, 'Token sudah expired. Silakan login kembali.', 401);
    }
    return errorResponse(res, 'Token tidak valid.', 401);
  }
};

module.exports = authMiddleware;