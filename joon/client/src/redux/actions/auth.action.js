import axios from "axios";
import { LOGIN_SUCCESS } from "../actionType";

export function login(body) {
  const req = axios.post("/api/auth", body).then((response) => response.data);
  return {
    type: LOGIN_SUCCESS,
    payload: req,
  };
}
