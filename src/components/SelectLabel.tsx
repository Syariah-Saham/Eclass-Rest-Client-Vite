import { FormControl, FormHelperText, FormLabel } from "@mui/material";
import React from "react";
import { ISelectLabelProps } from "../interfaces/components/select";
import Select from "./Select";

const SelectLabel: React.FC<ISelectLabelProps> = (props) => {
  return (
    <FormControl {...props}>
      <FormLabel {...props.labelProps}>{props.label}</FormLabel>
      <Select {...props.selectProps} />
      <FormHelperText>{props.helperText}</FormHelperText>
    </FormControl>
  );
};

export default SelectLabel;
