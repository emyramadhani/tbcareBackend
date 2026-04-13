require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const kontenRoutes = require('./routes/content-routes');

const app = express();
const PORT = process.env.PORT || 3002;

const uploadsDir = path.join(__dirname, '../uploads/videos');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('Folder uploads/videos berhasil dibuat');
}

app.use(cors());
app.use(helmet({

  crossOriginResourcePolicy: { policy: 'cross-origin' },
}));
app.use(express.json());

app.use('/videos', express.static(path.join(__dirname, '../uploads/videos')));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected - Edukasi Service'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });


app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'edukasi-service' });
});

app.get('/', (req, res) => {
    res.json({ message: `User Service berjalan pada port ${PORT}` });
});


app.use('/api/konten', kontenRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route tidak ditemukan' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Edukasi Service running on port ${PORT}`);
  console.log(`Local: http://localhost:${PORT}`);
});