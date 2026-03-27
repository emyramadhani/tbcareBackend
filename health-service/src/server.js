require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const layananRoutes = require('./routes/health-service-routes');

const app = express();
const PORT = process.env.PORT || 3006;

app.use(cors());
app.use(helmet());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected - Layanan Service');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'layanan-service' });
});

app.use('/api/layanan-kesehatan', layananRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route tidak ditemukan' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});


app.listen(PORT, () => {
  console.log(`Layanan Service running on port ${PORT}`);
  console.log(`Local: http://localhost:${PORT}`);
});