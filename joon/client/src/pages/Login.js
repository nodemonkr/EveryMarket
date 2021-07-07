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

const Login = () => {
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
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {/* ---login 버튼 클릭 로딩 구현 start ---*/}
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email"
                placeholder="test1@example.com"
                icon={<FiMail />}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="******"
                icon={<FiLock />}
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit">Login</StyledFormButton>
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

export default Login;
