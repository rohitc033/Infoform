const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",        // your MySQL username
  password: "Rohit@3387",        // your MySQL password
  database: "application_form"  // replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = connection;
