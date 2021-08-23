import { combineReducers } from "redux";
import {
  authReducer,
  forgotPasswordReducer,
  userProfileReducer,
} from "./authReducer";
import { cartReducer } from "./cartReducer";
import { newOrderReducer } from "./orderReducer";
import { productDetailsReducer, productReducer } from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: productDetailsReducer,
  auth: authReducer,
  userUpdate: userProfileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
});

export default rootReducer;
