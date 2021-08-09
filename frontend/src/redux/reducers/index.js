import { combineReducers } from "redux";
import { authReducer, userProfileReducer } from "./authReducer";
import { productDetailsReducer, productReducer } from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: productDetailsReducer,
  auth: authReducer,
  userUpdate: userProfileReducer,
});

export default rootReducer;
