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

//로그인 구현입니다.
//프론트에서 서버로 데이터를 전송뒤 서버에서 데이터 받아보았습니다.
app.post("/api/login", (req, res) => {
  console.log(
    "[서버] 데이터 수신 성공 아이디 :",
    req.body.userId,
    "비밀번호 :",
    req.body.userPassword
  );
  const userdata_id = req.body.userId;
  const userdata_pw = req.body.userPassword;
  // db처리

  // 비밀번호 암호화 ( userdata_pw )
  console.log("비밀번호 암호화 사용할 변수 데이터 : ", userdata_pw);
  res.send("");
});

//회원가입 구현입니다.
//프론트로부터 데이터 수신
app.post("/api/signup", (req, res) => {
  console.log(
    "[서버]회원가입 데이터 수신 성공 ",
    "이름 :",
    req.body.signupName,
    "아이디 :",
    req.body.signupId,
    "비밀번호 :",
    req.body.signupPassword
  );
  const signupData_name = req.body.signupName;
  const signupData_id = req.body.signupId;
  const signupData_pw = req.body.signupPassword;

  let sql = "INSERT INTO USERDATA VALUES(null,?,?,?)";
  let params = [signupData_name, signupData_id, signupData_pw];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows, err);
    console.log("[db]회원가입 정보 추가 성공");
  });

  //프론트에서 sql로 데이터추가

  // db처리

  // 비밀번호 암호화 ( userdata_pw )
  console.log("비밀번호 암호화 사용할 변수 데이터 : ", signupData_pw);
  res.send("");
});

// app.post("/api/signup", (req, res) => {
//   const signupName = req.body.signupName;
//   const signupId = req.body.signupId;
//   const signupPw = req.body.signupPassword;

//   let sql = "INSERT INTO userdata VALUES(null,?,?,?)";
//   let params = [signupName, signupId, signupPw];
//   connection.query(sql, params, (err, rows, fields) => {
//     res.send(rows);
//     console.log("[db]회원가입 정보 추가 성공");
//   });
// });
