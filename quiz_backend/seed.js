const db = require('./db');

const questions = [
  {
    question: "Which of the following is used to declare a variable in JavaScript?",
    option1: "var",
    option2: "let",
    option3: "const",
    option4: "int",
    correctOption: 1
  },
  {
    question: "What will the following code output in JavaScript?\nconsole.log(typeof null);",
    option1: '"object"',
    option2: '"null"',
    option3: '"undefined"',
    option4: '"boolean"',
    correctOption: 1
  },
  {
    question: "Which of these is not a JavaScript data type?",
    option1: "Number",
    option2: "Boolean",
    option3: "Character",
    option4: "Undefined",
    correctOption: 3
  },
  {
    question: "What is the difference between `let` and `var` in JavaScript?",
    option1: "`var` is block-scoped, `let` is function-scoped",
    option2: "`var` is function-scoped, `let` is block-scoped",
    option3: "Both are block-scoped",
    option4: "Both are function-scoped",
    correctOption: 2
  },
  {
    question: "What will this TypeScript code do?\nlet x: number = \"Hello\";",
    option1: "It will work fine",
    option2: "Compile-time error",
    option3: "Runtime error",
    option4: "It will convert automatically",
    correctOption: 2
  },
  {
    question: "In TypeScript, what is the type annotation for a string?",
    option1: "str",
    option2: "string",
    option3: "String",
    option4: "text",
    correctOption: 2
  }
];

questions.forEach(q => {
  db.run(
    `INSERT INTO questions (question, option1, option2, option3, option4, correctOption)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [q.question, q.option1, q.option2, q.option3, q.option4, q.correctOption],
    (err) => {
      if (err) console.error("Error inserting question:", err.message);
    }
  );
});

console.log("Questions inserted successfully!");