// backend/server/app.js
import express from 'express';
import qcRoutes from '../routes/qc.js';

const app = express();

app.use(express.json());
app.use('/api/qc', qcRoutes);

// Optional: health check
app.get('/ping', (_req, res) => res.send('server is alive'));

export default app;