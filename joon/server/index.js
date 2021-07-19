const express = require("express");
const app = express();

// bodyParsers는 express에 기본 포함이 됩니다.더이상 사용하지 않습니다
// const bodyParsers = require("body-parser");

//파일 업로드
const fileupload = require("express-fileupload");

// 서버포트
const port = 5000;
const cors = require("cors");
const config = require("../server/config/db");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/api/customers", function (req, res, next) {
  config
    .getUserList()
    .then((rows) => {
      res.json(rows);
    }) // 쿼리 결과가 JSON 형태로 출력됨
    .catch((err) => {
      console.error(err);
    });
});

//port 주소 설정
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
