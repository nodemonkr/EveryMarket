const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (userdata_id, userdata_pw, done) {
      const userdata_id = req.body.userId;
      const userdata_pw = req.body.userPassword;

      connection.query(
        "SELECT * FROM userdata WHERE email =?",
        userdata_id,
        (err, result) => {
          if (err) {
            res.send({ err: err });
          } else {
            //아이디가 일치한다면 비밀번호가 일치하는지 확인합니다.
            if (result.length > 0) {
              bcrypt.compare(
                userdata_pw,
                result[0].password,
                (err, response) => {
                  if (response) {
                    console.log("[서버] email과 password 일치");
                    res.send({ message: "email과 password 일치합니다." });
                  } else {
                    res.send({ message: "틀린 아이디/비밀번호 입니다" });
                  }
                }
              );
            } else {
              res.send({ message: "유저가 존재하지 않습니다 " });
            }
          }
        }
      );
    }
  )
);

app.post(
  "/api/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/signup",
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (req, user, done) {
  done(null, user);
});

app.post("/api/login", (req, res) => {
  console.log(
    "[서버] 데이터 수신 성공 아이디 :",
    req.body.userId,
    "비밀번호 :",
    req.body.userPassword
  );
});
