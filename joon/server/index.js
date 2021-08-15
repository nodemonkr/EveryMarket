const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
// const { auth } = require("../client/src/auth/auth");
// bodyParsers는 express에 기본 포함이 됩니다.더이상 사용하지 않습니다
// const bodyParsers = require("body-parser");

//token
const jwt = require("jsonwebtoken");

//cookie
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//bcrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;

//multer
const multer = require("multer");
const upload = multer({ dest: "./upload" });

// 서버포트
const port = 4000;
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
// app.get("/api/customers", (req, res) => {
//   connection.query("SELECT * FROM CUSTOMER", (err, rows, fields) => {
//     res.send(rows);
//   });
// });

//프론트에서 sql로 데이터 추가
// app.use("/image", express.static("./upload"));
// app.post("/api/customers", upload.single("image"), (req, res) => {
//   let sql = "INSERT INTO customer VALUES(null,?,?,?)";
//   let image = "/image/" + req.file.filename;
//   let name = req.body.name;
//   let age = req.body.age;

//   let params = [image, name, age];
//   connection.query(sql, params, (err, rows, fields) => {
//     res.send(rows);
//   });
// });

//회원가입,비밀번호 암호화 입니다.
//프론트로부터 데이터 수신 및 mysql 회원정보 추가
// app.post("/api/signup", (req, res) => {
//   console.log(
//     "[서버]회원가입 데이터 수신 성공 ",
//     "이름 :",
//     req.body.signupName,
//     "아이디 :",
//     req.body.signupId,
//     "비밀번호 :",
//     req.body.signupPassword
//   );

// const signupData_name = req.body.signupName;
// const signupData_id = req.body.signupId;
// const signupData_pw = req.body.signupPassword;

//비밀번호 암호화 입니다.
// bcrypt.hash(signupData_pw, saltRounds, (err, hash) => {
//   if (err) {
//     console.log(err);
//   }

//   let sql = "INSERT INTO userdata VALUES(null,?,?,?)";
//   let params = [signupData_name, signupData_id, hash];
//   connection.query(sql, params, (err, rows, fields) => {
//     res.send(rows);
//     console.log(
//       "[db]회원가입 정보 추가 성공",
//       "이름 :",
//       signupData_name,
//       "아이디 :",
//       signupData_id,
//       "비밀번호 :",
//       signupData_pw
//     );
//   });
// });

// db처리

// 비밀번호 암호화 ( userdata_pw )
// res.send("");
// });

// 로그인, 비밀번호 암호화, 쿠키 구현입니다.

app.post("/api/auth", (req, res) => {
  console.log(
    "[서버] 데이터 수신 성공 아이디 :",
    req.body.email,
    "비밀번호 :",
    req.body.password
  );
  const userdata_id = req.body.email;
  const userdata_pw = req.body.password;

  connection.query(
    "SELECT * FROM userdata WHERE email = ?",
    userdata_id,
    (err, result) => {
      if (err) {
        res.send({ err: "hi" });
      } else {
        //아이디가 일치한다면 비밀번호가 일치하는지 확인합니다.
        if (result.length > 0) {
          //비밀번호 암호화 입니다.
          bcrypt.compare(userdata_pw, result[0].password, (err, response) => {
            if (res) {
              //쿠키를 생성하였습니다.
              const accessToken = jwt.sign(
                {
                  userdata_id,
                  userdata_pw,
                },
                "YOUR_SECRET_KEY"
              );
              res.cookie("accessToken", accessToken);
              res.status(201).json({
                message: "email과 password 일치합니다. ",
              });
              console.log("[서버] email과 password 일치");
            } else {
              res.json({
                message: "틀린 아이디/비밀번호 입니다",
              });
            }
          });
        } else {
          res.json({
            message: "유저가 존재하지 않습니다 ",
          });
        }
      }
    }
  );
});

// app.get("/api/login", (req, res, next) => {
//   let token = req.accessToken;

//   let decoded = jwt.verify(token, "YOUR_SECRET_KEY");
//   if (decoded) {
//     res.send("권한이 있어서 api 수행 가능");
//   } else {
//     res.send("권한이 없습니다.");
//   }
// });
