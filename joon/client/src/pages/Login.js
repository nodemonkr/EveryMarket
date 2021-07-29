import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../auth/actions/user-action";

const Login = () => {
  const dispatch = useDispatch();

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
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("전송완료");

    dispatch(loginUser());
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <input
          name="email"
          type="email"
          onChange={onEmailHandle}
          placeholder="email"
          value={userEmail}
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={onPasswordHandle}
          value={userPassword}
        />
      </div>
      <div>
        <button type="submit">로그인</button>
        <button>
          <Link to="/signup"> 회원가입</Link>
        </button>
      </div>
    </form>
  );
};
export default Login;
