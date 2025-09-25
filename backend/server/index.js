// backend/index.js
const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('QC Audit Tool backend running on port ${PORT}');
});