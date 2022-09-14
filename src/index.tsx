import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { ThemeProvider } from "styled-components";
import { theme } from "./style-components/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
