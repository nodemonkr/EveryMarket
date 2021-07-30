const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
// bodyParsers는 express에 기본 포함이 됩니다.더이상 사용하지 않습니다
// const bodyParsers = require("body-parser");

//multer
const multer = require("multer");
const upload = multer({ dest: "./upload" });

// 서버포트
const port = 5000;
app.listen(port, () => console.log(`listening on port ${port}`));

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//db, 데이터베이스에 연결후 파싱합니다 .
const fs = require("fs");
const data = fs.readFileSync("./config/db.json");
const conf = JSON.parse(data);

//파싱한 data를 연경합니다.
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  database: conf.database,
});
connection.connect();

//sql 데이터베이스에서 서버로 데이터 가져옵니다.
app.get("/api/customers", (req, res) => {
  connection.query("SELECT * FROM CUSTOMER", (err, rows, fields) => {
    res.send(rows);
  });
});

//프론트에서 sql로 데이터 추가
app.use("/image", express.static("./upload"));
app.post("/api/customers", upload.single("image"), (req, res) => {
  let sql = "INSERT INTO customer VALUES(null,?,?,?)";
  let image = "/image/" + req.file.filename;
  let name = req.body.name;
  let age = req.body.age;

  let params = [image, name, age];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

//회원가입 데이터 SQL에 보내기 (성공)

//로그인 구현입니다.
//로그인 데이터 가져옵니다.
app.get("/api/login", (req, res) => {
  connection.query("SELECT * FROM USERDATA", (err, rows, fields) => {
    res.send(rows);
  });
});

//프론트에서 sql로 데이터 추가
app.post("/api/login", (req, res) => {
  let sql = "INSERT INTO USERDATA VALUES(null,?,?)";
  let email = req.body.email;
  let password = req.body.password;

  let params = [email, password];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});
