const express = require("express");
const app = express();
const mysql = require("mysql");
const post = 3000;
const db = require("../server/config/db");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// connect to our database
db.connect((err) => {
  if (err) throw err;
});

app.get("/", (req, res) => {
  db.query(
    "INSERT INTO login(email, password) VALUES(?,?)",
    [email, password],
    (err, result) => {
      console.log(err);
    }
  );
});

// set app port

app.listen(port, () => {
  console.log(`listening at http://localhost:${post}`);
});
