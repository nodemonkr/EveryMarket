// 서버전송용 라이브러리
import Axios from "axios";

//styled components
import {
  StyledTextInput,
  StyledFormArea,
  StyledFormButton,
  StyledLabel,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  CopyrightText,
} from "../components/Styles";
import Logo from "../assets/logo.png";

//formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup";

//icons
import { FiMail, FiLock } from "react-icons/fi";

//loader
import Loader from "react-loader-spinner";

// auth & redux
import { connect } from "react-redux";
import { loginUser } from "../auth/actions/userActions";
import { useHistory } from "react-router-dom";
//import { response } from "express";

//로그인함수구현
const loginbutton = () => {
  Axios.post("http://127.0.0.1:3100/login", {
    email: "testemail",
    password: "testpasswd",
  }).then((res) => {
    console.log(res);
  });
};
// .then(function (response) {
//   console.log(response);
//   //응답에 따른 처리
// })
// .catch(function (error) {
//   console.log(error);
//   // error에따른 처리
// })
const Login = (loginUser) => {
  const history = useHistory();
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Member Login
        </StyledTitle>

        <Formik
          initialValues={{ email: "", password: "" }}
          //Yup을 사용한 유효성 검사 기능
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Redquired"),
            password: Yup.string()
              .min(8, " Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
          })}
          // server쪽으로 보내는 함수
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(
              "콘솔용 이메일값 : " +
                values.email +
                "콘솔용 비밀번호" +
                values.password
            ); // 값테스트용 (정상)
            // 서버쪽 데이터전송(테스트용 데이터 송신)
            var email = values.email;
            // // fetch test
            // fetch("http://127.0.0.1:3100/login", {
            //   method: "POST",
            //   body: JSON.parse(email),
            //   headers: {
            //     "content-Type": "application/json",
            //   },
            //});

            Axios.post({
              url: "http://127.0.0.1:3100/login",
              data: {
                email: values.email,
                password: values.password,
              }
                .then(function (response) {
                  console.log(response);
                  //응답에 따른 처리
                })
                .catch(function (error) {
                  console.log(error);
                  // error에따른 처리
                }),
              //loginUser(values, history, setFieldError, setSubmitting);
            });
          }}
        >
          {/* ---login 버튼 클릭 로딩 구현 start ---*/}
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email"
                id="email"
                placeholder="test1@example.com"
                icon={<FiMail />}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                id="pw"
                placeholder="******"
                icon={<FiLock />}
              />
              <ButtonGroup>
                {!isSubmitting && (
                  //<StyledFormButton type="submit" onClick={this.loginbutton()}>
                  <StyledFormButton onClick={loginbutton()}>
                    Login
                  </StyledFormButton>
                )}

                {isSubmitting && (
                  <Loader
                    type="ThreeDots"
                    color={colors.theme}
                    height={49}
                    width={100}
                  />
                )}
              </ButtonGroup>
            </Form>
          )}
          {/* ---login 버튼 클릭 로딩 구현 end--- */}
        </Formik>
        <ExtraText>
          New here? <TextLink to="/signup">Signup</TextLink>{" "}
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>All rights reserved ©2020</CopyrightText>
    </div>
  );
};

export default connect(null, { loginUser })(Login);
