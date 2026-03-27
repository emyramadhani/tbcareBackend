const { errorResponse } = require('../utils/response');

const isAdmin = (req, res, next) => {
  const userRole = req.headers['x-user-role'] || req.userRole;

  if (userRole !== 'admin') {
    return errorResponse(res, 'Akses ditolak. Hanya Admin yang dapat melakukan aksi ini.', 403);
  }
  
  next();
};

module.exports = { isAdmin };