import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme/theme";
import "./styles/main.css";
import { palette } from "./styles/theme/palette";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              backgroundColor: palette.background.default,
              color: palette.text.primary,
            }}
          >
            <App />
          </Box>
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
