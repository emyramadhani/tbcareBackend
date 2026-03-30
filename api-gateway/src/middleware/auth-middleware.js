const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Akses ditolak. Token tidak ditemukan.' });
  }

  try {
    const validateResponse = await fetch(`${process.env.USER_SERVICE_URL}/api/auth/validate-token`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!validateResponse.ok) {
      return res.status(401).json({ 
        success: false, 
        message: 'Akses ditolak. Token tidak valid, sudah kadaluarsa, atau Anda telah logout.' 
      });
    }

    const result = await validateResponse.json();

    req.headers['x-user-id'] = result.data.id;
    req.headers['x-user-role'] = result.data.role;

    next();
  } catch (err) {
    console.error('Gateway Auth Error:', err);
    return res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan komunikasi dari Gateway ke Auth Service.' 
    });
  }
};

module.exports = authMiddleware;