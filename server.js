const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/submit", (req, res) => {
  const {
    firstName, lastName, email, phone, university,
    degree, discipline, citizenship, gender, above18
  } = req.body;

  const query = `
    INSERT INTO applicants
    (firstName, lastName, email, phone, university, degree, discipline, citizenship, gender, above18)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [
    firstName, lastName, email, phone, university,
    degree, discipline, citizenship, gender, above18
  ], (err, result) => {
    if (err) {
      console.error("DB Insert Error:", err);
      res.status(500).send("Database insert failed");
    } else {
      res.send("Application submitted successfully!");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
