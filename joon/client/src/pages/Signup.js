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
import { FiMail, FiLock, FiUser, FiCalendar } from "react-icons/fi";

//loader
import Loader from "react-loader-spinner";

// auth & redux
import { connect } from "react-redux";
import { signupUser } from "../auth/actions/userActions";
import { useHistory } from "react-router-dom";

const Signup = (signupUser) => {
  const history = useHistory();
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Member Signup
        </StyledTitle>

        <Formik
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
            dateOfBirth: "",
            name: "",
          }}
          //Yup을 사용한 유효성 검사 기능
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Redquired"),
            password: Yup.string()
              .min(8, " Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
            name: Yup.string().required("Required"),
            dateOfBirth: Yup.date().required("Required"),
            repeatPassword: Yup.string()
              .required("Required")
              .oneOf([Yup.ref("password")], "passwords must match"),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
            signupUser(values, history, setFieldError, setSubmitting);
          }}
        >
          {/* ---login 버튼 클릭 로딩 구현 start ---*/}
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                type="text"
                label="Full Name"
                placeholder="Bart Simpson"
                icon={<FiUser />}
              />
              <TextInput
                name="email"
                type="text"
                label="Email"
                placeholder="test1@example.com"
                icon={<FiMail />}
              />
              <TextInput
                name="dateOfBirth"
                type="date"
                label="Date of Birth"
                placeholder="******"
                icon={<FiCalendar />}
              />
              <TextInput
                name="password"
                type="password"
                label="password"
                placeholder="******"
                icon={<FiLock />}
              />
              <TextInput
                name="repeatPassword"
                type="password"
                label="Repeat Password"
                placeholder="******"
                icon={<FiLock />}
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit">Signup</StyledFormButton>
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
          Already have an account? <TextLink to="/login">Login</TextLink>{" "}
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>All rights reserved ©2020</CopyrightText>
    </div>
  );
};

export default connect(null, { signupUser })(Signup);
