import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // 데이터 저장공간
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // form데이터 이벤트핸들러 처리 함수
  const onEmailHandle = (event) => {
    setUserEmail(event.currentTarget.value);
  };
  const onPasswordHandle = (event) => {
    setUserPassword(event.currentTarget.value);
  };
  const onSubmit = () => {
    console.log("전송완료");
    console.log(userEmail + userPassword);
    // Step1. Login정보 확인 (공백여부, 조건)
    // Step2. 여기서 axios로 서버로 전송
  };

  return (
    <form>
      <div>
        <input
          name="email"
          type="email"
          onChange={onEmailHandle}
          // value="email"
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          onChange={onPasswordHandle}
          // value="password"
        />
      </div>
      <div>
        <button onClick={onSubmit()}>로그인</button>
        <button>
          <Link to="/signup"> 회원가입</Link>
        </button>
      </div>
    </form>
  );
};
export default Login;
