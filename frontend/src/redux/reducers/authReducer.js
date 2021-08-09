import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_USER_LOADING,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  UPDATE_PROFILE_LOADING,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "redux/constants/authConstants";

let initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null,
  success: null,
};

export const authReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING:
    case LOAD_USER_LOADING:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
        error: null,
        success: action.payload.message,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOAD_USER_FAIL:
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

export const userProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case UPDATE_PROFILE_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
