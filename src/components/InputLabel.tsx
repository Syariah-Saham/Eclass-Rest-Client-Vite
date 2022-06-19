import { FormControl, FormHelperText, FormLabel } from "@mui/material";
import React from "react";
import { IInputLabelProps } from "../interfaces/components/input";
import Input from "./Input";

const InputLabel: React.FC<IInputLabelProps> = (props) => {
  return (
    <FormControl {...props} sx={{ ...props.sx, marginBottom: "10px" }}>
      <FormLabel {...props.labelProps}>{props.label}</FormLabel>
      <Input error={props.error} {...props.inputProps} />
      <FormHelperText sx={{ marginBottom: "20px" }}>
        {props.helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default InputLabel;
