import { Components } from "@mui/material";
import { Theme } from "@mui/system";
import { palette } from "./palette";
import { typography } from "./typography";

export const components: Components<Theme> = {
  MuiTypography: {
    defaultProps: {
      variant: "body1",
    },
    styleOverrides: {
      body1: {
        color: `${palette.text.primary} !important`,
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        backgroundColor: palette.secondary.dark,
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: "none",
        padding: "12px 20px",
        "&.tcell-head": {
          padding: "10px 20px",
          fontWeight: "bold",
          fontSize: typography.caption,
          pointerEvents: "none",
        },
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        transition: ".25s",
        ":hover": {
          backgroundColor: "#020e42",
        },
      },
    },
  },

  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
    styleOverrides: {
      root: {
        fontWeight: "bold",
        boxShadow: "none",
        fontSize: 14,
        borderRadius: "10px",
        padding: "6px 18px",
        minWidth: "140px",
        ":hover": {
          boxShadow: "none",
        },
        ":disabled": {
          color: palette.text.disabled,
          backgroundColor: palette.background.paper,
        },
        "&.loading:disabled": {
          "& .MuiButton-startIcon, & .MuiButton-endIcon": {
            display: "none",
          },
        },
      },
      sizeLarge: {
        height: "48px",
      },
      containedPrimary: {
        ":disabled": {
          backgroundColor: palette.primary.dark,
          color: "#fff",
          opacity: 0.7,
        },
      },
    },
  },
  MuiFab: {
    defaultProps: {
      size: "small",
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        color: palette.text.primary,
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        display: "block",
        width: "100%",
      },
    },
  },
  MuiFormLabel: {
    defaultProps: {
      color: "secondary",
    },
    styleOverrides: {
      root: {
        display: "block",
        color: palette.text.primary,
        fontSize: 16,
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
        display: "block",
        width: "100%",
        boxSizing: "border-box",
        borderRadius: "10px",
        padding: "8px 16px",
        fontSize: "14px",
        lineHeight: "24px",
        transition: ".25s",
        border: `1px solid ${palette.text.disabled}`,
        ":hover": {
          border: `1px solid ${palette.text.primary}`,
        },
        "&.Mui-focused": {
          border: `1px solid ${palette.text.disabled}`,
          boxShadow: `0px 0px 0px 3px ${palette.text.disabled}`,
        },
        "&.error": {
          border: `1px solid ${palette.error.main}`,
          color: palette.error.dark,
          "&.Mui-focused": {
            boxShadow: `0px 0px 0px 3px ${palette.error.dark}`,
          },
        },
        "&.Mui-disabled": {
          backgroundColor: palette.background.paper,
          ":hover": {
            border: `1px solid ${palette.text.disabled}`,
          },
        },
        "&.Mui-disabled.error": {
          border: `1px solid ${palette.text.disabled}`,
        },
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
      // wrap: "nowrap",
      spacing: 2,
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        padding: "24px",
        borderRadius: "22px",
        boxShadow: "none",
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
          borderRadius: "22px",
          padding: "24px",
        },
      },
    },
  },
};
