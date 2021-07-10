const express = require("express");
const app = express();
const mysql = require("mysql");
const post = 3000;

const cors = require("cors");
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1323",
  database: "cruddatabase",
});

// app.get("/", (req, res) => {
//   res.send("hi wordl");
// });

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO login (email, password) VALUES('rhcp1323@gmail.com','123123123');";
  db.query(sqlInsert, (err, result) => {
    res.send("sqwdqwdqwdqdw");
  });
});

app.listen(post, () => {
  console.log("running on port 3000");
});
