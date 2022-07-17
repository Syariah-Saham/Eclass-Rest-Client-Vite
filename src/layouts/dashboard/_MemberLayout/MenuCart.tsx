import { ShoppingCartOutlined } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatRp } from "../../../helpers/formatRp";
import { useAppSelector } from "../../../redux/hooks";

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
  thumbnail: {
    width: "90px",
    height: "60px",
    borderRadius: "14px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const MenuCart: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [menuChart, setMenuChart] = useState<{
    status: boolean;
    anchorEl: null | HTMLElement;
  }>({
    status: false,
    anchorEl: null,
  });

  const openMenuChart = (event: React.MouseEvent<HTMLElement>) => {
    setMenuChart({
      status: true,
      anchorEl: event.currentTarget,
    });
  };

  const closeMenuChart = () => {
    setMenuChart({
      status: false,
      anchorEl: null,
    });
  };

  const cart = useAppSelector((state) => state.cart);

  return (
    <>
      <IconButton color="secondary" size="large" onClick={openMenuChart}>
        <Badge badgeContent={cart.list?.length} color="info">
          <ShoppingCartOutlined />
        </Badge>
      </IconButton>

      <Menu
        open={menuChart.status}
        anchorEl={menuChart.anchorEl}
        onClose={closeMenuChart}
        onClick={closeMenuChart}
        PaperProps={{
          elevation: 1,
          sx: styles.menuPaper,
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {cart.list?.slice(0, 4)?.map((course) => (
          <MenuItem
            key={course.id}
            sx={{ padding: "10px 40px" }}
            onClick={() => navigate(`/member/courses/${course.id}`)}
          >
            <Stack direction="row" alignItems={"center"} gap={2}>
              <Box sx={styles.thumbnail}>
                <img
                  style={{ height: "100%" }}
                  src={`${import.meta.env.VITE_STORAGE_URL}/${
                    course.thumbnail
                  }`}
                />
              </Box>
              <Box>
                <Typography variant="h6">{course.title}</Typography>
                <Typography
                  variant="h5"
                  sx={{ color: theme.palette.warning.main + " !important" }}
                >
                  {formatRp(course.price)}
                </Typography>
              </Box>
            </Stack>
          </MenuItem>
        ))}
        <Box sx={{ padding: "10px 40px" }}>
          <Link to="/member/cart">
            <Button sx={{ width: "100%" }} color="secondary">
              Lihat Keranjang
            </Button>
          </Link>
        </Box>
      </Menu>
    </>
  );
};

export default MenuCart;
