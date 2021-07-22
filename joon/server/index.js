const express = require("express");
const app = express();
const mariadb = require("mariadb");

// bodyParsers는 express에 기본 포함이 됩니다.더이상 사용하지 않습니다
// const bodyParsers = require("body-parser");

// 서버포트
const port = 5000;
const cors = require("cors");
const db = require("../server/config/db");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//multer
const multer = require("multer");
const upload = multer({ dest: "./upload" });

// sql로 데이터를 보냅니다.
app.use("/image", express.static("./upload"));

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "1323",
  database: "mydata",
});

app.post("/api/customers", upload.single("image"), function (req, res) {
  let sql = "INSERT INTO customer VALUES (null,?,?,?)";
  let image = "/image/" + req.file.filename;
  let name = req.body.name;
  let age = req.body.age;
  let params = [image, name, age];
  pool.query(sql, params, (err, rows, fields) => {
    res.send(rows);
    console.log(err);
    console.log(rows);
  });
});

//sql에서 데이터 받아옵니다.
app.get("/api/customers", function (req, res, next) {
  db.getUserList()
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
