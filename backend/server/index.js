import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import qcRoutes from "../routes/qc.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from frontend/dist
const distPath = path.resolve(__dirname, "../../frontend/dist");
app.use(express.static(distPath));

// Mount backend routes
app.use("/api/qc", qcRoutes);

// Catch-all route for SPA
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.join(distPath, "index.html"));
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`QC Audit Tool backend running on port ${PORT}`);
});
