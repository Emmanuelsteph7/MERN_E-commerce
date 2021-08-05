import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
} from "redux/constants/authConstants";

let initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

export const authReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
