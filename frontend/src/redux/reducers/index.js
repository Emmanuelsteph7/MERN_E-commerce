import { combineReducers } from "redux";
import {
  authReducer,
  forgotPasswordReducer,
  userProfileReducer,
} from "./authReducer";
import { cartReducer } from "./cartReducer";
import { productDetailsReducer, productReducer } from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: productDetailsReducer,
  auth: authReducer,
  userUpdate: userProfileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
});

export default rootReducer;
