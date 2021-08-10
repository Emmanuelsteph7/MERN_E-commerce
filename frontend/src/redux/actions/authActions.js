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
  UPDATE_PASSWORD_LOADING,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_LOADING,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "redux/constants/authConstants";

import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_LOADING });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const bodyData = {
      email,
      password,
    };

    const res = await axios.post("/api/login", bodyData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.errMessage,
    });
  }
};

export const register = (bodyData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_LOADING });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data", // because we would pass in the avatar
      },
    };

    const res = await axios.post("/api/register", bodyData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.user,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.errMessage,
    });
  }
};

export const updateProfile = (bodyData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_LOADING });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data", // because we would pass in the avatar
      },
    };

    const res = await axios.put("/api/profile/update", bodyData, config);

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: res.data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.errMessage,
    });
  }
};

export const updateProfileReset = () => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_RESET });
};

export const updatePassword = (bodyData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_LOADING });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put("/api/password/update", bodyData, config);

    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: res.data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.errMessage,
    });
  }
};

export const updatePasswordReset = () => async (dispatch) => {
  dispatch({ type: UPDATE_PASSWORD_RESET });
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_LOADING });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/forgot-password", email, config);

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: res.data.message,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.errMessage,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_LOADING });

    const res = await axios.get("/api/profile");

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: res.data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.errMessage,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/logout");

    dispatch({
      type: LOGOUT_SUCCESS,
      payload: res.data.message,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data.errMessage,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
