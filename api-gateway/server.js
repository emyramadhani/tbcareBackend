require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const proxyRoutes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req, res) => {
    res.json({ message: `API Gateway berjalan pada port ${PORT}` });
});


app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'api-gateway' });
});


app.use('/', proxyRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal Gateway Error',
    });
});

app.listen(PORT, () => {
    console.log(`API Gateway berjalan pada port ${PORT}`);
    console.log(`Local: http://localhost:${PORT}`);
});