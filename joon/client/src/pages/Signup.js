import React, { useState } from "react";

//styled components

// auth & redux
import { useHistory, Link } from "react-router-dom";

//axios
import axios from "axios";

const Signup = () => {
  //데이터 저장공간
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 헨들링
  const nameHandle = (e) => {
    setName(e.currentTarget.value);
  };
  const emailHandle = (e) => {
    setEmail(e.currentTarget.value);
  };
  const passwordHandle = (e) => {
    setPassword(e.currentTarget.value);
  };

  //서버로 회원가입 데이터 전송
  const onClickSignup = (e) => {
    e.preventDefault();
    console.log("회원가입 버튼이 발동되었습니다.");
    axios
      .post("/api/signup", {
        signupName: name,
        signupId: email,
        signupPassword: password,
      })
      .then((res) => console.log(res))
      .catch();
  };

  // const onClickSignup = () => {
  //   console.log("회원가입 버튼이 발동되었습니다.");
  //   const url = "/api/signup";
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("email", email);
  //   formData.append("password", password);
  //   const config = {
  //     headers: {
  //       "content-type": "multipart/form-data",
  //     },
  //   };
  //   return axios.post(url, formData, config);
  // };

  return (
    <form>
      <div>
        <input
          name="name"
          type="text"
          label="Full Name"
          placeholder="Bart Simpson"
          onChange={nameHandle}
        />
      </div>
      <div>
        <input
          name="email"
          type="text"
          label="Email"
          placeholder="test1@example.com"
          onChange={emailHandle}
        />
      </div>
      {/* <div>
        <input
          name="dateOfBirth"
          type="date"
          label="Date of Birth"
          placeholder="******"
        />
      </div> */}
      <div>
        <input
          name="password"
          type="password"
          label="password"
          placeholder="******"
          onChange={passwordHandle}
        />
      </div>
      {/* <div>
        <input
          name="repeatPassword"
          type="password"
          label="Repeat Password"
          placeholder="******"
        />
      </div> */}
      <div>
        <button type="button" onClick={onClickSignup}>
          signup
        </button>
      </div>
      <div>
        <button>
          <Link to="/login">login</Link>
        </button>
      </div>
    </form>
  );
};

export default Signup;
