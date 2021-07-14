import React, { useState } from "react";
import { connect } from "react-redux";
// 서버전송용 라이브러리
import Axios from "axios";
import { loginUser } from "../auth/actions/userActions";
import { useHistory } from "react-router-dom";

const Login = (loginUser) => {
  const history = useHistory();

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
      </div>
    </form>
  );
};
export default connect(null, { loginUser })(Login);
