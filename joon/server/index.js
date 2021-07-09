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

app.get("/", (req, res) => {});

app.listen(3000, () => {
  console.log("running on port 3001");
});
