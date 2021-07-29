import { combineReducers } from "redux";
import { productDetailsReducer, productReducer } from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: productDetailsReducer,
});

export default rootReducer;
