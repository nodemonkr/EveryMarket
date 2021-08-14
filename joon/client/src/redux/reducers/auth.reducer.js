import {
  LOAD_PROFILE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
} from "../actionType";

const init = {
  accessToken: null,
  user: null,
  loading: false,
};

export const authReducer = (state = init, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return { ...state, accessToken: action.payload, loading: false };

    case LOGIN_FAIL:
      return {
        ...state,
        accessToken: null,
        loading: false,
        error: action.payload,
      };
    case LOAD_PROFILE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
