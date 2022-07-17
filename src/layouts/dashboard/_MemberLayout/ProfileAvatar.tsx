import { AccountCircleRounded, Logout } from "@mui/icons-material";
import {
  Avatar,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TMenu } from "../../../interfaces/components/menu-item";
import { logout } from "../../../redux/actions/auth";
import { changePage } from "../../../redux/actions/dashboard";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const styles = {
  menuPaper: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

const ProfileAvatar: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const [menuProfile, setMenuProfile] = useState<{
    status: boolean;
    anchorEl: null | HTMLElement;
  }>({
    status: false,
    anchorEl: null,
  });

  const openMenuProfile = (event: React.MouseEvent<HTMLElement>) => {
    setMenuProfile({
      status: true,
      anchorEl: event.currentTarget,
    });
  };

  const closeMenuProfile = () => {
    setMenuProfile({
      status: false,
      anchorEl: null,
    });
  };

  const redirectToProfile = () => {
    dispatch(
      changePage({
        page: "profile",
        title: "Profile",
        menu: TMenu.PROFILE,
      })
    );
  };

  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
  };

  return (
    <>
      <Avatar
        alt="User 1"
        src={`${import.meta.env.VITE_STORAGE_URL}/${auth.user?.profile_photo}`}
        onClick={openMenuProfile}
        sx={{
          cursor: "pointer",
          transition: ".25s",
          ":hover": {
            boxShadow: `0px 0px 0px 2px ${theme.palette.secondary.main}`,
          },
        }}
      />
      <Menu
        open={menuProfile.status}
        anchorEl={menuProfile.anchorEl}
        onClose={closeMenuProfile}
        onClick={closeMenuProfile}
        PaperProps={{
          elevation: 1,
          sx: styles.menuPaper,
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to="/member/profile">
          <MenuItem onClick={redirectToProfile} sx={{ padding: "10px 40px" }}>
            <ListItemIcon>
              <AccountCircleRounded color="inherit" fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
        </Link>
        <MenuItem
          onClick={handleLogout}
          sx={{ padding: "10px 40px", color: theme.palette.error.main }}
        >
          <ListItemIcon sx={{ color: theme.palette.error.main }}>
            <Logout color="inherit" fontSize="small" />
          </ListItemIcon>
          <Typography variant="h6" color="inherit">
            Keluar
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileAvatar;
