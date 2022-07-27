import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import MonitorRoundedIcon from "@mui/icons-material/MonitorRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { menusMobile } from "../../../constant/member-menus";
import { changePage } from "../../../redux/actions/dashboard";
import NavItem from "./NavItem";

const BottomNav: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClickDashboard = () => {
    const menuDashboard = menusMobile["dashboard"];
    navigate(menuDashboard.target);
    dispatch(
      changePage({
        page: menuDashboard.icon,
        title: menuDashboard.text,
        menu: menuDashboard.name,
      })
    );
  };

  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: theme.palette.background.paper,
        padding: "15px 20px",
        zIndex: 1000,
        boxShadow: `-1px -1px 2px ${theme.palette.background.default}`,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-around"
          sx={{ width: "40%" }}
        >
          <NavItem menu="courses" />
          <NavItem menu="wishlist" />
        </Stack>
        <Stack direction="column" alignItems="center">
          <Box
            sx={{
              background: theme.palette.secondary.main,
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              position: "absolute",
              top: -20,
            }}
            onClick={handleClickDashboard}
          >
            <GridViewRoundedIcon color="inherit" sx={{ fontSize: "35px" }} />
          </Box>
        </Stack>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-around"
          sx={{ width: "40%" }}
        >
          <NavItem menu="certificates" />
          <NavItem menu="profile" />
        </Stack>
      </Stack>
    </Box>
  );
};

export default BottomNav;
