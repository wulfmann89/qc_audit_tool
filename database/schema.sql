CREATE TABLE IF NOT EXISTS test_menu (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  cost REAL,
  benefit_score REAL,
  clinical_value TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
  description TEXT
)
