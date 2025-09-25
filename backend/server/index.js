// backend/server/index.js
import app from './app.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`QC Audit Tool backend running on port ${PORT}`);
});