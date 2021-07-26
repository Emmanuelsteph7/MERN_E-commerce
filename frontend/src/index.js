import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./theme/globalTheme.style";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/theme.style";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
