import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "redux/store";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: "120px 0",
  // you can also just use 'scale'
  transition: transitions.FADE,
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
