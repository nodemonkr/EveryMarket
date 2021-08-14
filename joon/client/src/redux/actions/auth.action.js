import axios from "axios";
import { LOGIN_SUCCESS } from "../actionType";

export function login(body) {
  return (dispatch) => {
    const req = axios
      .post("/api/auth", body)
      .then((res) => res.data)
      .then((res) => console.log(res));
    return {
      type: LOGIN_SUCCESS,
      payload: req.accessToken,
    };
  };
}

// export const login = (body) => {
//   return (dispatch) => {
//     return axios.post("/api/login", body).then((res) => {
//       const token = res.data.accessToken;
//       localStorage.setItem("jwtToken", token);
//       setAuth(token);
//     });
//   };
// };

// export const login = (body) => (dispatch) => {
//   axios.post("/api/login", body).then((res) => {
//     const token = res.data.accessToken;
//     localStorage.setItem("jwtToken", token);
//     dispatch({ type: LOGIN_SUCCESS, payload: token });
//   });
// };
