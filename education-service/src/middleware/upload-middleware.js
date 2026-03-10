const multer = require('multer');
const path = require('path');
const { errorResponse } = require('../utils/response');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads/videos'));
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const originalName = file.originalname.replace(/\s+/g, '-').toLowerCase();
    cb(null, `${timestamp}-${originalName}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['video/mp4', 'video/mkv', 'video/avi', 'video/mov', 'video/webm'];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Format file tidak didukung. Hanya video (mp4, mkv, avi, mov, webm) yang diizinkan.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 100 * 1024 * 1024,
  },
});

const uploadVideo = (req, res, next) => {
  const multerUpload = upload.single('video');

  multerUpload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return errorResponse(res, 'Ukuran file terlalu besar. Maksimal 100MB.', 400);
      }
      return errorResponse(res, `Upload error: ${err.message}`, 400);
    }

    if (err) {
      return errorResponse(res, err.message, 400);
    }

    next();
  });
};

module.exports = { uploadVideo };