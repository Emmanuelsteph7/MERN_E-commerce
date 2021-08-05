import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productDetailsReducer, productReducer } from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: productDetailsReducer,
  auth: authReducer,
});

export default rootReducer;
