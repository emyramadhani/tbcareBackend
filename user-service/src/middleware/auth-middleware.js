const jwt = require('jsonwebtoken');
const { errorResponse } = require('../utils/response');
const BlacklistedToken = require('../models/blacklisted-token');

const authMiddleware = async (req, res, next) => { 
  const userIdFromGateway = req.headers['x-user-id'];

  if (userIdFromGateway) {
    req.userId = userIdFromGateway;
    return next();
  }

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return errorResponse(res, 'Akses ditolak. Token tidak ditemukan.', 401);
  }

  try {
  
    const isBlacklisted = await BlacklistedToken.findOne({ token });
    if (isBlacklisted) {
      return errorResponse(res, 'Sesi telah berakhir. Silakan login kembali.', 401);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    req.token = token; 
    next();
  } catch (err) {
    return errorResponse(res, 'Token tidak valid atau sudah expired.', 401);
  }
};

module.exports = authMiddleware;