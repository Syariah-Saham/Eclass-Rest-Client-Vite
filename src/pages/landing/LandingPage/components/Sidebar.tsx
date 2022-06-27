import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface ISidebar {
  isOpen: boolean;
}
const Sidebar: React.FC<ISidebar> = (props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boxSizing: "border-box",
        padding: "100px 20px",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        transition: "0.5s ease-in-out",
        transform: `translateX(${props.isOpen ? "0%" : "-100%"})`,
      }}
    >
      <Button sx={{ width: "90%" }} variant="text">
        Home
      </Button>
      <Button sx={{ width: "90%" }} variant="text">
        Kelas
      </Button>
      <Button sx={{ width: "90%" }} variant="text">
        Mentor
      </Button>
      <Link to="/login">
        <Button sx={{ width: "90%" }} variant="outlined">
          Masuk
        </Button>
      </Link>
      <Link to="/register">
        <Button sx={{ width: "90%" }} variant="contained">
          Daftar
        </Button>
      </Link>
    </Box>
  );
};

export default Sidebar;
