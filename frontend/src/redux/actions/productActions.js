import {
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_LOADING,
  PRODUCT_DETAILS_LOADING,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "redux/constants/productConstants";

import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_LOADING });

    const res = await axios.get("/api/products");

    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: error.response.data.errMessage,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_LOADING });

    const res = await axios.get(`/api/product/${id}`);
    console.log(res);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: res.data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.errMessage,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
