import { ACTION_SNACKBAR } from "../../types/actions/snackbar";
import { TSeverity } from "../../interfaces/state/snackbar-state";

export const openSnackbar = (data: {
  severity: TSeverity;
  message: string;
}) => {
  return {
    type: ACTION_SNACKBAR.OPEN,
    severity: data.severity,
    message: data.message,
  };
};

export const closeSnackbar = () => {
  return {
    type: ACTION_SNACKBAR.CLOSE,
  };
};
