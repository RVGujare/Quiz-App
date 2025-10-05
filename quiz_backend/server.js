const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// app.get('/quiz', (req, res) => {
//   db.all("SELECT id, question, option1, option2, option3, option4 FROM questions", [], (err, rows) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json(rows);
//   });
// });

app.get('/quiz', (req, res) => {
  db.all(
    "SELECT id, question, option1, option2, option3, option4 FROM questions",
    [],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });

      // Transform rows
      const formatted = rows.map(row => ({
        id: row.id,
        text: row.question,
        options: [row.option1, row.option2, row.option3, row.option4]
      }));

      res.json(formatted);
    }
  );
});


app.post('/submit', (req, res) => {
  const userAnswers = req.body.answers;

  db.all("SELECT id, correctOption FROM questions", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    let score = 0;
    rows.forEach(q => {
      const userAns = userAnswers.find(a => a.id === q.id);
      if (userAns && (userAns.answer ) === q.correctOption) score++;
    });

    res.json({ score, total: rows.length });
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
