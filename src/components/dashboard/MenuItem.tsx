import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  IIconItems,
  IMenuItemProps,
} from "../../interfaces/components/menu-item";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import MonitorRoundedIcon from "@mui/icons-material/MonitorRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changePage } from "../../redux/actions/dashboard";

const icons: IIconItems = {
  dashboard: <GridViewRoundedIcon color="inherit" />,
  courses: <MonitorRoundedIcon color="inherit" />,
  admins: <BadgeRoundedIcon color="inherit" />,
  mentors: <SupervisedUserCircleRoundedIcon color="inherit" />,
  members: <GroupRoundedIcon color="inherit" />,
  profile: <AccountCircleRoundedIcon color="inherit" />,
  certificates: <WorkspacePremiumIcon color="inherit" />,
  wishlist: <FavoriteIcon color="inherit" />,
  cart: <ShoppingCartRoundedIcon color="inherit" />,
  payments: <ReceiptLongRoundedIcon color="inherit" />,
  help: <HelpRoundedIcon color="inherit" />,
};
type TIconKey = keyof typeof icons;

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const dashboard = useAppSelector((state) => state.dashboard);

  const handleClick = () => {
    dispatch(
      changePage({
        page: props.icon,
        title: props.text,
        menu: props.name,
      })
    );
  };

  return (
    <Link to={props.target}>
      <Stack
        direction={"row"}
        alignItems="center"
        gap={2}
        onClick={handleClick}
        sx={{
          color: theme.palette.text.primary,
          padding: "10px 15px",
          borderRadius: "6px",
          transition: ".25s",
          marginBottom: "18px",
          backgroundColor:
            props.name === dashboard.menu
              ? theme.palette.secondary.dark
              : "inherit",
          ":hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }}
      >
        {icons[props.icon as TIconKey]}
        <Typography
          fontWeight={"medium"}
          sx={{
            transition: ".5s",
            transform: dashboard.showSidebar
              ? "translateX(0%) scaleX(1) "
              : "translateX(-50%) scaleX(0) ",
          }}
        >
          {props.text}
        </Typography>
      </Stack>
    </Link>
  );
};

export default MenuItem;
