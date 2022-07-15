import { AnyAction } from "redux";
import { ISnackbarState } from "../../interfaces/state/snackbar-state";
import { ACTION_SNACKBAR } from "../../types/actions/snackbar";

const initialState: ISnackbarState = {
  open: false,
  severity: "success",
  autoHideDuration: 3000,
  message: "",
};

const snackbarReducer = (state = initialState, action: AnyAction) => {
  switch (action?.type) {
    case ACTION_SNACKBAR.OPEN:
      return {
        ...state,
        open: true,
        severity: action?.severity,
        message: action?.message,
      };
    case ACTION_SNACKBAR.CLOSE:
      return { ...state, open: false };
    default:
      return state;
  }
};

export default snackbarReducer;
