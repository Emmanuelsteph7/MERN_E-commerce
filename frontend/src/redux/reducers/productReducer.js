import {
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_LOADING,
  PRODUCT_DETAILS_LOADING,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "redux/constants/productConstants";

const initialState = {
  loading: false,
  products: [],
  productsCount: null,
  error: null,
  resPerPage: "",
};

const productState = {
  loading: false,
  product: {},
  error: null,
};

export const productReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.totalProducts,
        resPerPage: action.payload.resPerPage,
      };

    case ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
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

export const productDetailsReducer = (state = { ...productState }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };

    case PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
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
