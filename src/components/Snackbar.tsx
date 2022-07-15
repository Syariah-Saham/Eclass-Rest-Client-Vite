import React from "react";
import { Snackbar, Alert } from "@mui/material";
import * as ReactDOM from "react-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { closeSnackbar } from "../redux/actions/snackbar";

const SnackbarComp: React.FC = () => {
  const state = useAppSelector((state) => state.snackbar);
  const dispatch = useAppDispatch();

  return ReactDOM.createPortal(
    <Snackbar
      open={state.open}
      autoHideDuration={state.autoHideDuration}
      onClose={() => dispatch(closeSnackbar())}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={() => dispatch(closeSnackbar())}
        severity={state.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {state.message}
      </Alert>
    </Snackbar>,
    document.getElementById("snackbars-root") as Element
  );
};

export default SnackbarComp;
