import { Components } from "@mui/material";
import { Theme } from "@mui/system";
import { palette } from "./palette";
import { typography } from "./typography";

export const components: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
    styleOverrides: {
      root: {
        fontWeight: "medium",
        boxShadow: "none",
        fontSize: 14,
        borderRadius: "6px",
        padding: "10px 16px",
        width: "160px",
        height: "44px",
        ":hover": {
          boxShadow: "none",
        },
      },
      sizeLarge: {
        height: "48px",
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        display: "block",
        marginBottom: 16,
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: "#40423A",
        fontSize: 14,
        lineHeight: "24px",
        marginBottom: 8,
      },
    },
  },
  MuiInputBase: {
    defaultProps: {
      fullWidth: true,
      placeholder: "Placeholder",
    },
    styleOverrides: {
      root: {
        height: "44px",
        boxSizing: "border-box",
        borderRadius: "6px",
        padding: "10px 16px",
        fontSize: "14px",
        lineHeight: "24px",
        transition: ".25s",
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        position: "absolute",
        fontSize: 12,
        "&.error": {
          color: palette.error.main,
        },
        "&.success": {
          color: palette.error.main,
        },
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        color: palette.text.primary,
        fontSize: typography.htmlFontSize,
        lineHeight: "28px",
      },
    },
  },
  MuiGrid: {
    defaultProps: {
      wrap: "nowrap",
      columnGap: 2,
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        padding: "24px",
        borderRadius: "6px",
        boxShadow: "0px 4px 10px rgba(9, 12, 2, 0.1)",
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
      },
    },
  },
  MuiModal: {
    styleOverrides: {
      root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .modal-box": {
          background: palette.background.paper,
          minWidth: "200px",
          minHeight: "100px",
          outline: "none",
          boxSizing: "border-box",
          borderRadius: "6px",
          padding: "24px",
        },
      },
    },
  },
};
