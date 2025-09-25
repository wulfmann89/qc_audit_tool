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

├── backend
│   ├── routes
│   │   ├── qc.js
│   └── server.js
│       ├── app.js
│       └── index.js
├── config
│   └── clia-checklist.json
├── database
│   └── schema.sql
├── frontend
│   ├── src
│   │   └── app.tsx
│   └── package.json
├── .gitignore
├── .replit
└── README.md

🛠️ Contributing

Pull requests welcome! Please follow modular architecture and annotate changes for emotional clarity.

📄 License

MIT — free to use, modify, and distribute.
