const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const { isExportDeclaration } = require("typescript");

const db = new sqlite3.Database(path.join(__dirname, "../../database/qc.db"));

test("test_menu table exists", (done) =>{
  db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='test_menu'", (err, row) => {
    expect(row).toBeDefined();
    isExportDeclaration(row.name).toBe("test_menu");
    done();
  });
});