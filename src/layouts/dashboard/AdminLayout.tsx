import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { PropsWithChildren, useState } from "react";
import Content from "../../components/dashboard/Content";
import Sidebar from "../../components/dashboard/Sidebar";
import { IMenuItemProps, TMenu } from "../../interfaces/components/menu-item";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { changePage } from "../../redux/actions/dashboard";
import { logout } from "../../redux/actions/auth";
import SnackBarComp from "../../components/Snackbar";
import { useMenuDashboard } from "../../hooks/useMenuDashboard";

const menus: IMenuItemProps[] = [
  {
    target: "/admin/dashboard",
    icon: "dashboard",
    text: "Dashboard",
    name: TMenu.DASHBOARD,
  },
  {
    target: "/admin/courses",
    icon: "courses",
    text: "Kelas",
    name: TMenu.COURSES,
  },
  {
    target: "/admin/admins",
    icon: "admins",
    text: "Admin",
    name: TMenu.ADMINS,
  },
  {
    target: "/admin/mentors",
    icon: "mentors",
    text: "Mentor",
    name: TMenu.MENTORS,
  },
  {
    target: "/admin/members",
    icon: "members",
    text: "Member",
    name: TMenu.MEMBERS,
  },
  {
    target: "/admin/profile",
    icon: "profile",
    text: "Profile",
    name: TMenu.PROFILE,
  },
];

const AdminLayout: React.FC<PropsWithChildren> = (props) => {
  useMenuDashboard({ menus });
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const dashboard = useAppSelector((state) => state.dashboard);
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
    <Box sx={{ height: "100vh" }}>
      <Sidebar menus={menus} />
      <Content>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ marginBottom: "20px" }}
        >
          <Typography variant="h4">{dashboard.title}</Typography>
          <Box>
            <Avatar
              alt="User 1"
              src={`${import.meta.env.VITE_STORAGE_URL}/${
                auth.user?.profile_photo
              }`}
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
                sx: {
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
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Link to="/admin/profile">
                <MenuItem
                  onClick={redirectToProfile}
                  sx={{ padding: "10px 40px" }}
                >
                  <ListItemIcon>
                    <AccountCircleRoundedIcon
                      color="inherit"
                      fontSize="small"
                    />
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
          </Box>
        </Stack>
        <Box>{props.children}</Box>
        <SnackBarComp />
      </Content>
    </Box>
  );
};

export default AdminLayout;
