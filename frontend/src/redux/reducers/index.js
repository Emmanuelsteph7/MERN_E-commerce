import { combineReducers } from "redux";
import {
  authReducer,
  forgotPasswordReducer,
  userProfileReducer,
} from "./authReducer";
import { productDetailsReducer, productReducer } from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: productDetailsReducer,
  auth: authReducer,
  userUpdate: userProfileReducer,
  forgotPassword: forgotPasswordReducer,
});

export default rootReducer;
