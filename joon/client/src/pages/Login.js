import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { loginUser } from "../auth/actions/user-action";
import axios from "axios";

const Login = (props) => {
  const dispatch = useDispatch();

  // 데이터 저장공간
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // form데이터 이벤트핸들러 처리 함수
  const onEmailHandle = (e) => {
    setUserEmail(e.currentTarget.value);
  };
  const onPasswordHandle = (e) => {
    setUserPassword(e.currentTarget.value);
  };

  // 데이터 전송 함수
  const onClickLogin = (e) => {
    const body = {
      email: email,
      password: password,
    };
    e.preventDefault();
    console.log("로그인 버튼이 발동되었습니다.");
    // axios
    //   .post("/api/login", {
    //     userId: userEmail,
    //     userPassword: userPassword,
    //     //userpassword: userPassword,
    //   })
    //   .then((res) => console.log(res))
    //   .catch();

    dispatch(loginUser(body)).then((res) => {
      console.log(res);
      if (res.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert(res.payload.message);
      }
    });
  };

  return (
    <form>
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
        <button type="button" onClick={onClickLogin}>
          로그인
        </button>
        {/* <button type="button" onClick={onClickLogout}>
          로그아웃
        </button> */}
        <button>
          <Link to="/signup"> 회원가입</Link>
        </button>
      </div>
    </form>
  );
};

export default Login;
