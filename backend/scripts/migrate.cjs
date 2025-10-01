// backend/scripts/migrate.cjs
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const db = new sqlite3.Database(path.join(__dirname, "../../database/qc.db"));
const schema = fs.readFileSync(path.join(__dirname, "../../database/schema.sql"), "utf8");

db.exec(schema, (err) => {
  if (err) throw err;
  console.log("Migration complete");
  db.close();
  db.run("INSERT INTO schema_version (version) VALUES (:?)", ["v1.0"]);
});