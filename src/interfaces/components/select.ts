import { FormControlProps, FormLabelProps } from "@mui/material";
import { Props } from "react-select";

export interface ISelectProps extends Props {
  error?: boolean;
  transform?: string;
}

export interface ISelectLabelProps extends FormControlProps {
  label: string;
  helperText?: string;
  selectProps?: ISelectProps;
  labelProps?: FormLabelProps;
}
