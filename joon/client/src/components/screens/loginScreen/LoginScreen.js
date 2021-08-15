import React, { Link, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./_loginScreen.scss";
import { login } from "../../../redux/actions/auth.action";
import { useHistory } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    let body = {
      email: email,
      password: password,
    };

    dispatch(login(body));
    console.log("로그인 버튼이 발동되었습니다.");
  };

  const history = useHistory();

  // useEffect(() => {
  //   if (accessToken) {
  //     history.push("/");
  //   }
  // }, [accessToken]);

  // 데이터 저장공간
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form데이터 이벤트핸들러 처리 함수
  const onEmailHandle = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandle = (e) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <>
      <div>
        <input
          name="email"
          type="email"
          onChange={onEmailHandle}
          placeholder="email"
          value={email}
        />
      </div>

      <div>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={onPasswordHandle}
          value={password}
        />
      </div>
      <div>
        <button type="button" onClick={handleLogin}>
          로그인
        </button>

        {/* <button type="button" onClick={onClickLogout}>
          로그아웃
        </button> */}
        {/* <button>
          <Link to="/signup"> 회원가입</Link>
        </button> */}
      </div>
    </>
  );
};

export default LoginScreen;
