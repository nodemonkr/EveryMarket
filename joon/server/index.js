const express = require("express");
const app = express();
const mysql = require("mysql");

// bodyParsers는 express에 기본 포함이 됩니다.더이상 사용하지 않습니다
// const bodyParsers = require("body-parser");

//파일 업로드
const fileupload = require("express-fileupload");

// 서버포트
const port = 5000;
const db = require("../server/config/db");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//서버 작동 test(완료후 주석처리)
// app.get("/api/hello", (req, res) => {
//   res.send({ message: "hello express" });
// });

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: "0",
      name: "simson",
      age: 20,
      image: "https://placeimg.com/64/64/3",
    },
    {
      id: "1",
      name: "risa",
      age: 15,
      image: "https://placeimg.com/64/64/2",
    },
    {
      id: "2",

      name: "jun",
      age: 31,
      image: "https://placeimg.com/64/64/1",
    },
  ]);
});

//port 주소 설정
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
