import { FormControlProps, FormLabelProps, InputProps } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";

export interface IInputProps extends InputProps {
  customStyle?: {
    container?: CSSProperties;
    input?: CSSProperties;
    helperText?: CSSProperties;
  };
}

export interface IInputLabelProps extends FormControlProps {
  label: string;
  helperText?: string;
  inputProps?: IInputProps;
  labelProps?: FormLabelProps;
}
