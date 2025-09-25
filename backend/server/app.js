// backend/app.js
const express = require('express');
const app = express();
const qcRoutes = require('./routes/qc');

app.use(express.json());
app.use('/api/qc', qcRoutes);

// Optional: health check
app.get('/ping', (req, res) => resizeBy.send('server is alive'))

module.exports = app;