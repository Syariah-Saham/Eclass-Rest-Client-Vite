import React from "react";
import { Box, FormHelperText, useTheme } from "@mui/material";
import ReactSelect from "react-select";
import { ISelectProps } from "../interfaces/components/select";
import { palette } from "../styles/theme/palette";

const Select: React.FC<ISelectProps> = (props) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          "& input , &input:focus": { border: "none !important" },
        }}
      >
        <ReactSelect
          {...props}
          styles={{
            option: (provided, state) => {
              return {
                ...provided,
                color: palette.text.primary,
                backgroundColor: state.isSelected
                  ? palette.background.paper
                  : palette.background.default,
                transition: ".2s",
                cursor: state.isDisabled ? "not-allowed" : "default",
                ":active": {
                  ...provided[":active"],
                  backgroundColor: !state.isDisabled
                    ? state.isSelected
                      ? palette.background.default
                      : palette.background.paper
                    : undefined,
                },
                fontWeight: state.isSelected ? 600 : 400,
                padding: "14px 20px",
                fontSize: "14px",
              };
            },
            input: (provided, state) => ({
              ...provided,
              transform: props.transform ? props.transform : "translateY(0px)",
              padding: "0px 6px",
            }),
            placeholder: (provided, state) => ({
              ...provided,
              transform: props.transform ? props.transform : "translateY(0px)",
              padding: "0px 6px",
              color: palette.text.disabled,
            }),
            control: (provided, state) => ({
              ...provided,
              border: `1px solid ${
                props?.error
                  ? theme?.palette?.error?.main
                  : palette.text.disabled
              } `,
              borderRadius: "6px",
              height: "42px",
              boxShadow: "none",
              transition: ".25s",
              backgroundColor: state.isDisabled
                ? palette.background.paper
                : palette.background.default,
              "&:hover": {
                border: `1px solid ${
                  !props?.error
                    ? palette.text.primary
                    : theme?.palette?.error?.main
                }`,
                backgroundColor: palette.background.default,
              },
            }),
            menu: (provided, state) => ({
              ...provided,
              borderRadius: "10px",
            }),
            indicatorsContainer: (provided, state) => ({
              ...provided,
              height: "100%",
            }),
            indicatorSeparator: (provided, state) => ({
              ...provided,
              display: "none",
            }),
            singleValue: (provided, state) => ({
              ...provided,
              transform: props.transform ? props.transform : "translateY(0px)",
              padding: "0px 6px",
              fontSize: "14px",
              fontWeight: 500,
              color: !props?.error ? palette.text.primary : palette.error.main,
            }),
            container: (provided, state) => {
              return {
                ...provided,
              };
            },
          }}
        />
      </Box>
      <FormHelperText className="error">{props?.error}</FormHelperText>
    </>
  );
};

export default Select;
