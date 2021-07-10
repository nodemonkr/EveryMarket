import axios from "axios";

export const loginUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  axios.post("http://localhost:3000/");
  // make checks and get some data
  const user = { name: "simson", email: "simson@gmail.com" };
};

export const signupUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {};

export const logoutUser = () => {};
