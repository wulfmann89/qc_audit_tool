📘 README — Quality Control Audit Tool

🧪 Overview

This modular Quality Control Audit Tool is designed for point-of-care medical labs to streamline compliance, inventory, cost analysis, and test evaluation. Built with emotional clarity and regulatory rigor, it supports CLIA/CMS workflows and neurodivergent-friendly UX.

🧩 Modules

QC Scheduler: Templates for daily, monthly, annual tasks with timestamped entries and overdue alerts

Lot Tracker: Tracks lot numbers, expiry dates, usage, and QC pass/fail logs

Inventory Manager: Real-time stock levels, par thresholds, and vendor integration

Cost Analyzer: Calculates cost per test, absorbed cost, and margin with visualizations

Test Menu Evaluator: Models cost/benefit and clinical value for test scenarios

CLIA Workflow Validator: IQCP builder, CMS checklist, SOP uploads, and readiness scoring

☁️ Cloud IDE Setup (Replit)

This project is optimized for Replit, with fast boot and full-stack support.

.replit Configuration

run = "npm run dev"
language = "nodejs"

🚀 Getting Started

Import the Repo

Use GitHub import or upload files directly to Replit

Install Dependencies

npm install

Run the App

npm run dev

Access Frontend & Backend

Replit exposes ports automatically

Use preview pane or open in new tab

Environment Variables

Add .env keys via Replit's Secrets tab

Optional Enhancements

Add nodemon for hot reloads

Use Replit DB or SQLite for backend storage

Enable GitHub integration for version control

📦 File Structure

/

run = "node backend/server/index.js"
language = "nodejs"
modules = ["nodejs-20"]

[nix]
channel = "stable-25_05"
packages = ["np"]

[agent]
expertMode = true

[[ports]]
localPort = 3000
externalPort = 80

13m
 • 
14 minutes ago
Selection deleted
// backend/server/app.js
import express from 'express';
import qcRoutes from '../routes/qc.js';

const app = express();

app.use(express.json());
app.use('/api/qc', qcRoutes);

// Optional: health check
app.get('/ping', (_req, res) => res.send('server is alive'));

export default app;
Selection deleted
// backend/server/index.js
import app from './app.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`QC Audit Tool backend running on port ${PORT}`);
});
Enable "Accessible Terminal" in Workspace Settings to use a screen reader with the shell.
// backend/routes/qc.js
import { Router } from "express";
const router = Router();

/**
 * QC Scheduler Module
 * Returns mock task templates and compliance status
 */
router.get("/schedule", (req, res) => {
  res.json({
    tasks: ["Daily QC", "Monthly QC", "Annual Review"],
    overdue: ["Monthly QC"],
    SignedOff: ["Daily QC"],
  });
});

/**
 * Lot Tracker Module
 * Returns mock lot data and QC status
 */
router.get("/lot", (req, res) => {
  res.json({
    lotNumber: "ABC123",
    manufacturer: "LabCo",
    received: "2025-12-31",
    expiry: "2025-12-31",
    used: 85,
    wasted: 5,
    qcStatus: "Pass",
  });
});

/**
 * Inventory Manager Module
 * Returns mock inventory levels and alerts
 */
router.get("/inventory", (req, res) => {
  res.json({
    item: "Glucose Test Strips",
    stock: 42,
    parThreshold: 50,
    alert: true,
    vendor: "MedSupply Inc.",
  });
});

/**
 * Cost Analyzer Module
 * Returns mock cost metrics and visuals
 */
router.get("/cost", (req, res) => {
  res.json({
    contractRate: 1.25,
    unitCost: 0.85,
    testsPerUnit: 100,
    costPerTest: 2.75,
    margin: 0.45,
  });
});

/**
 * Test Menu Evaluator MOdule
 * Returns mock test scenarios and decision log
 */

router.get("/test-menu", (req, res) => {
  res.json({
    tests: [
      { name: "Glucose", score: 8.5 },
      { name: "HbA1c", score: 9.2 },
    ],
    decisions: [{ test: "HbA1c", action: "Add", note: "High clinical value" }],
  });
});

/**
 * CLIA Workflow Validator Module
 * Returns mock IQCP status and readiness score
 */
router.get("/clia", (req, res) => {
  res.json({
    iqcpStatus: "Incomplete",
    readinessScore: 72,
    checkList: ["Risk Assessment", "SOP Upload", "Self-Audit"],
  });
});

/**
 * Workflow Evaluation Module
 * Returns mock workflow metrics and recommendations
 */
router.get("/workflow", (req, res) => {
  res.json({
    iqcp: {
      preAnalytic: 'Sample integrity risk: low',
      analytic: 'Instrument drift: moderate',
      postAnalytic: 'Report delay: minimal',
  },
  checklist:['SOP uploaded', 'Logs complete', 'Audit score: 92%'],
  })
})

export default router;

📘 README — Quality Control Audit Tool

🧪 Overview

This modular Quality Control Audit Tool is designed for point-of-care medical labs to streamline compliance, inventory, cost analysis, and test evaluation. Built with emotional clarity and regulatory rigor, it supports CLIA/CMS workflows and neurodivergent-friendly UX.

🧩 Modules

QC Scheduler: Templates for daily, monthly, annual tasks with timestamped entries and overdue alerts

Lot Tracker: Tracks lot numbers, expiry dates, usage, and QC pass/fail logs

Inventory Manager: Real-time stock levels, par thresholds, and vendor integration

Cost Analyzer: Calculates cost per test, absorbed cost, and margin with visualizations

Test Menu Evaluator: Models cost/benefit and clinical value for test scenarios

CLIA Workflow Validator: IQCP builder, CMS checklist, SOP uploads, and readiness scoring

☁️ Cloud IDE Setup (Replit)

This project is optimized for Replit, with fast boot and full-stack support.

.replit Configuration

run = "npm run dev" language = "nodejs"

🚀 Getting Started

Import the Repo

Use GitHub import or upload files directly to Replit

Install Dependencies

npm install

Run the App

npm run dev

Access Frontend & Backend

Replit exposes ports automatically

Use preview pane or open in new tab

Environment Variables

Add .env keys via Replit's Secrets tab

Optional Enhancements

Add nodemon for hot reloads

Use Replit DB or SQLite for backend storage

Enable GitHub integration for version control

📦 File Structure
├── .gitignore
├── .replit
├── README.md
├── tsconfig.json
├── backend
│   ├── package.json
│   ├── package-lock.json
│   ├── node_modules/
│   ├── routes
│   │   └── qc.js
│   └── server
│       ├── app.js
│       └── index.js
├── config
│   └── clia-checklist.json
├── database
│   └── schema.sql
├── frontend
│   ├── package.json
│   ├── package-lock.json
│   ├── node_modules/
│   └── src
│       └── app.tsx

🛠️ Contributing

Pull requests welcome! Please follow modular architecture and annotate changes for emotional clarity.

📄 License

MIT — free to use, modify, and distribute.

🛠️ Contributing

Pull requests welcome! Please follow modular architecture and annotate changes for emotional clarity.

📄 License

MIT — free to use, modify, and distribute.
