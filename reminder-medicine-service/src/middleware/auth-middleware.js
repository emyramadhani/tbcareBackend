const { errorResponse } = require('../utils/response');

const authMiddleware = (req, res, next) => {
  
  const userId = req.headers['x-user-id'];
  const userRole = req.headers['x-user-role'];

  if (!userId || !userRole) {

    return errorResponse(res, 'Akses ditolak. Permintaan harus melalui API Gateway yang terautentikasi.', 401);
  }

  req.userId = userId;
  req.userRole = userRole;
  
  next();
};

module.exports = authMiddleware;