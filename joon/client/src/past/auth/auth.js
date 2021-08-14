let auth = (req, res, next) => {
  //클라이언트 쿠키에서 토큰을 가져옵니다.
  let token = req.cookies.user;

  if (token) {
    jwt.verify(token, "YOUR_SECRET_KEY", (err, decoded) => {
      if (err) {
        return res.json({
          success: 0,
          message: "Invalid Token...",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: 0,
      message: "Access Denied! Unauthorized User",
    });
  }
  req.token = token;
  next();
};

module.exports = { auth };
