const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParsers = require("body-parser");
// 서버포트
const post = 3100;
const db = require("../server/config/db");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(bodyParsers.json());
app.use(bodyParsers.urlencoded({ extended: false }));

// connect to our database
db.connect((err) => {
  if (err) throw err;
});

//로그인
app.post("/login", (req, res) => {
  console.log(req.body.email); //아이디와 비밀번호가 정상적으로 수신됬는지 확인
  // 입력받은 id, pw 변수화처리 (원래는 이 변수를 이용해서 비밀번호 암호화 필수)
  // var tmp_email = req.email;
  // var tmp_pw = req.password;
  // console.log("로그인 처리에 필요한데이터 :" + tmp_email + tmp_pw);
  // db.query(
  //   "INSERT INTO login(email, password) VALUES(?,?)",
  //   [email, password],
  //   (err, result) => {
  //     console.log(err);
  //   }
  // );
});

//login은 post로 받아서 처리할것 (값을 요청하는것이아닌 로그인을 db에 요청하는것)
// passport 추후에 구성할것

// set app port

app.listen(post, () => {
  console.log(`listening at http://localhost:${post}`);
});
