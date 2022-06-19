import React from "react";
import { Box, InputBase, Stack, FormHelperText } from "@mui/material";
import AlertCircle from "../assets/icons/alert-circle.svg";
import { IInputProps } from "../interfaces/components/input";

const Input: React.FC<IInputProps> = (props) => {
  return (
    <Box sx={{ ...props?.customStyle?.container, width: "100%" }}>
      <Stack
        direction="row"
        alignItems={"center"}
        sx={{ position: "relative" }}
      >
        <InputBase
          className={props.error ? "error" : ""}
          sx={{ ...props?.customStyle?.input }}
          {...props}
        />
        {props.error && !props.disabled && (
          <img src={AlertCircle} alt="alert error" className="alert-circle" />
        )}
      </Stack>
      <FormHelperText
        sx={{ position: "absolute", ...props?.customStyle?.helperText }}
        className="error"
      >
        {props?.error}
      </FormHelperText>
    </Box>
  );
};

export default Input;
