import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { changePage } from "../../../redux/actions/dashboard";
import { menusMobile } from "../../../constant/member-menus";
import MonitorRoundedIcon from "@mui/icons-material/MonitorRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import FavoriteIcon from "@mui/icons-material/Favorite";

const icons = {
  courses: <MonitorRoundedIcon color="inherit" />,
  wishlist: <FavoriteIcon color="inherit" />,
  certificates: <WorkspacePremiumIcon color="inherit" />,
  profile: <AccountCircleRoundedIcon color="inherit" />,
};

const textMenu = {
  courses: "Kelasku",
  wishlist: "Wishlist",
  certificates: "Sertifikat",
  profile: "Profile",
};

type TMenu = "courses" | "wishlist" | "certificates" | "profile";
const NavItem: React.FC<{ menu: TMenu }> = ({ menu }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleClick = (menu: TMenu) => {
    switch (menu) {
      case "courses":
        const menuCourses = menusMobile["courses"];
        navigate(menuCourses.target);
        dispatch(
          changePage({
            page: menuCourses.icon,
            title: menuCourses.text,
            menu: menuCourses.name,
          })
        );
        break;
      case "wishlist":
        const menuWishlist = menusMobile["wishlist"];
        navigate(menuWishlist.target);
        dispatch(
          changePage({
            page: menuWishlist.icon,
            title: menuWishlist.text,
            menu: menuWishlist.name,
          })
        );
        break;
      case "certificates":
        const menuCertificates = menusMobile["certificates"];
        navigate(menuCertificates.target);
        dispatch(
          changePage({
            page: menuCertificates.icon,
            title: menuCertificates.text,
            menu: menuCertificates.name,
          })
        );
        break;
      case "profile":
        const menuProfile = menusMobile["profile"];
        navigate(menuProfile.target);
        dispatch(
          changePage({
            page: menuProfile.icon,
            title: menuProfile.text,
            menu: menuProfile.name,
          })
        );
        break;
    }
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      onClick={handleClick.bind(null, menu)}
      sx={{
        color: location.pathname.includes(menu)
          ? theme.palette.secondary.main
          : "inherit",
      }}
    >
      {icons[menu]}
      <Typography variant="caption">{textMenu[menu]}</Typography>
    </Stack>
  );
};

export default NavItem;
