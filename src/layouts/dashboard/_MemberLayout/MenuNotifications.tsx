import {
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import moment from "moment";
import "moment/dist/locale/id";
import { INotification } from "../../../interfaces/notification-model";
import { useNavigate } from "react-router-dom";
import { markAsRead } from "../../../redux/actions/notifications";

const styles = {
  menuPaper: {
    overflow: "auto",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    maxHeight: "420px",
    width: "500px",
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

const MenuNotifications: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const notifications = useAppSelector((state) => state.notification);
  const [menu, setMenu] = useState<{
    status: boolean;
    anchorEl: null | HTMLElement;
  }>({
    status: false,
    anchorEl: null,
  });

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenu({
      status: true,
      anchorEl: event.currentTarget,
    });
  };

  const closeMenu = () => {
    setMenu({
      status: false,
      anchorEl: null,
    });
  };

  const handleClick = (item: INotification) => {
    dispatch(markAsRead(item.id));
    if (item.url) {
      navigate(item.url);
    }
  };

  return (
    <>
      <IconButton color="secondary" size="large" onClick={openMenu}>
        <Badge
          badgeContent={
            notifications.list.filter((item) => item.is_read === false).length
          }
          color="info"
        >
          <NotificationsOutlinedIcon />
        </Badge>
      </IconButton>
      <Menu
        open={menu.status}
        anchorEl={menu.anchorEl}
        onClose={closeMenu}
        onClick={closeMenu}
        PaperProps={{
          elevation: 1,
          sx: styles.menuPaper,
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {notifications.list.slice(0, 20).map((item) => (
          <MenuItem
            key={item.id}
            onClick={handleClick.bind(null, item)}
            sx={{
              color: !item.is_read ? theme.palette.secondary.light : "inherit",
            }}
          >
            <Box sx={{ padding: "10px 20px", width: "90%" }}>
              <Typography variant="h6" sx={{ display: "block" }}>
                {item.title}
              </Typography>
              <Box>
                <Typography variant="body2" noWrap={true}>
                  {item.body}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    textAlign: "right",
                    display: "block",
                    fontStyle: "italic",
                  }}
                >
                  {moment(item.created_at).locale("id").fromNow()}
                </Typography>
              </Box>
            </Box>
          </MenuItem>
        ))}

        {!notifications.list.length && (
          <Box sx={{ padding: "20px" }}>
            <Typography textAlign={"center"}>Tidak ada data</Typography>
          </Box>
        )}
      </Menu>
    </>
  );
};

export default MenuNotifications;
