import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";

let initialState = {};

// we can choose to place thunk directly in the applyMiddleware function and
// but instead, an array was created so that incase there are other deprndencies, it would be placed here and applied using spread operator
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
