import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme/theme";
import { palette } from "./styles/theme/palette";

// ----- file pond -----
import { registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
import "./styles/main.css";

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
