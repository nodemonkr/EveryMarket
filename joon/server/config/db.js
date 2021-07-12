const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1323",
  database: "cruddatabase",
});

module.exports = db;
