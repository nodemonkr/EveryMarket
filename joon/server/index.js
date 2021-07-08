const express = require("express");
const app = express();
const mariadb = require("mariadb");

const db = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "CRUDDataBase",
});

// app.get("/", (req, res) => {
//   res.send("hi wordl");
// });

app.get("/", (req, res) => {
  const mariaInsert =
    "INSERT INTO movie-reviws (movieName, movieReview) VALUES ('inception','goodmovie')";
  db.query(mariaInsert, (err, result) => {
    res.send("hi wordl");
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
