import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
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
      payload: res.data,
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
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.errMessage,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
