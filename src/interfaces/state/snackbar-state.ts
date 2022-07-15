export type TSeverity = "error" | "warning" | "info" | "success";

export interface ISnackbarState {
  open: boolean;
  severity: TSeverity;
  autoHideDuration?: number;
  message: string;
}
