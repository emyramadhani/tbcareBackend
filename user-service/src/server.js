require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(helmet());
app.use(express.json());


mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });


app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'user-service' });
});

app.get('/', (req, res) => {
    res.json({ message: `User Service berjalan pada port ${PORT}` });
});


app.use('/api/auth', authRoutes);
app.use('/api/users', profileRoutes);


app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route tidak ditemukan' });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`User Service running on port ${PORT}`);
    console.log(`Local: http://localhost:${PORT}`);
});