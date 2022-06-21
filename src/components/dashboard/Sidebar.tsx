import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import Logo from "../../assets/logos/logo_eclass.png";
import MenuIcon from "@mui/icons-material/Menu";
import { ISidebarProps } from "../../interfaces/components/sidebar";
import MenuItem from "./MenuItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleSidebar } from "../../redux/actions/dashboard";

const Sidebar: React.FC<ISidebarProps> = (props) => {
  const theme = useTheme();
  const dashboard = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleSidebar());
  };

  return (
    <aside>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          transition: ".5s",
          width: dashboard.showSidebar ? "300px" : "75px",
          height: "100vh",
          boxSizing: "border-box",
          padding: `50px ${dashboard.showSidebar ? "32px" : "10px"}`,
          backgroundColor: theme.palette.background.paper,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          zIndex: 1000,
        }}
      >
        <IconButton
          color="secondary"
          size="large"
          onClick={handleClick}
          sx={{ position: "fixed", top: "10px", left: "12px" }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ width: "35%", margin: "auto", height: "4%" }}>
          <img
            style={{
              width: "100%",
              transition: ".5s",
              transform: dashboard.showSidebar ? "scaleX(1)" : "scaleX(0)",
            }}
            src={Logo}
            alt="Logo Eclass"
          />
        </Box>
        <Box sx={{ height: "92%", padding: "50px 0px" }}>
          {props.menus.map((menu) => (
            <MenuItem
              key={menu.target}
              target={menu.target}
              icon={menu.icon}
              text={menu.text}
              name={menu.name}
            />
          ))}
        </Box>
        <Box
          sx={{
            height: "4%",
            transition: ".5s",
            transform: dashboard.showSidebar ? "scaleX(1)" : "scaleX(0)",
          }}
        >
          <footer>
            <Typography variant="caption">
              ©Copyright 2022 PT. Syariah Saham Indonesia
            </Typography>
          </footer>
        </Box>
      </Box>
    </aside>
  );
};

export default Sidebar;
