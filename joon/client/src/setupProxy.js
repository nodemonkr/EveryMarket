// 프록시 설정에 http-proxy-middleware 를 사용시 파일명이 setupProxy.js 이여야 작동합니다.

const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api/",
    createProxyMiddleware({
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  );
};
