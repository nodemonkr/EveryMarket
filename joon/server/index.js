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

//multer
const multer = require("multer");
const upload = multer({ dest: "./upload" });

app.use("/file", express.static("./upload"));

// sql로 데이터를 보냅니다.
app.post("/api/customers", upload.single("file"), (req, res) => {
  let sql = "INSERT INTO CUSTOMER VALUES (null, ?,?)";
  let file = "/file/" + req.file.filename;
  let title = req.body.title;
  let params = { file, title };
  connection.query(sql, params, (err, rows, fields) => {
    console.log(rows);
    res.send(rows);
  });
});

//sql에서 데이터 받아옵니다.
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
