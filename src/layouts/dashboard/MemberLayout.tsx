import { AccountCircleRounded, Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { PropsWithChildren, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Content from "../../components/dashboard/Content";
import Sidebar from "../../components/dashboard/Sidebar";
import { IMenuItemProps, TMenu } from "../../interfaces/components/menu-item";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { logout } from "../../redux/actions/auth";
import { changePage } from "../../redux/actions/dashboard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const menus: IMenuItemProps[] = [
  {
    target: "/member/dashboard",
    icon: "dashboard",
    text: "Beranda",
    name: TMenu.DASHBOARD,
  },
  {
    target: "/member/courses",
    icon: "courses",
    text: "Kelasku",
    name: TMenu.COURSES,
  },
  {
    target: "/member/certificates",
    icon: "certificates",
    text: "Sertifikat",
    name: TMenu.CERTIFICATES,
  },
  {
    target: "/member/wishlist",
    icon: "wishlist",
    text: "Wishlist",
    name: TMenu.WISHLIST,
  },
  {
    target: "/member/cart",
    icon: "cart",
    text: "Keranjang",
    name: TMenu.CART,
  },
  {
    target: "/member/payments",
    icon: "payments",
    text: "Pembayaran",
    name: TMenu.PAYMENTS,
  },
  {
    target: "/member/help",
    icon: "help",
    text: "Bantuan",
    name: TMenu.HELP,
  },
];

const MemberLayout: React.FC<PropsWithChildren> = (props) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const dashboard = useAppSelector((state) => state.dashboard);
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
        {/* <Stack direction="row" justifyContent="space-between"> */}
        {/* <Typography variant="h4">{dashboard.title}</Typography> */}
        <Stack direction="row" justifyContent={"flex-end"} gap={1}>
          <Box>
            <IconButton color="secondary" size="large">
              <NotificationsOutlinedIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton color="secondary" size="large">
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Box>
          <Box>
            <Avatar
              alt="User 1"
              src="https://i.pinimg.com/564x/f6/c3/79/f6c379ccfb9130cfd36c63722d5251be.jpg"
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
          </Box>
        </Stack>
        {/* </Stack> */}
        <Box sx={{ marginTop: "30px" }}>{props.children}</Box>
      </Content>
    </Box>
  );
};

export default MemberLayout;
