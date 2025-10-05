const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./quiz.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    option1 TEXT NOT NULL,
    option2 TEXT NOT NULL,
    option3 TEXT NOT NULL,
    option4 TEXT NOT NULL,
    correctOption INTEGER NOT NULL
    );
  `);
});

module.exports = db;
