import { Box, Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";
import Content from "../../components/dashboard/Content";
import Sidebar from "../../components/dashboard/Sidebar";
import { IMenuItemProps, TMenu } from "../../interfaces/components/menu-item";
import SnackBarComp from "../../components/Snackbar";
import ProfileAvatar from "./_MemberLayout/ProfileAvatar";
import MenuCart from "./_MemberLayout/MenuCart";
import { useMenuDashboard } from "../../hooks/useMenuDashboard";
import MenuNotifications from "./_MemberLayout/MenuNotifications";

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
    target: "/member/profile",
    icon: "profile",
    text: "Profile",
    name: TMenu.PROFILE,
  },
  {
    target: "/member/help",
    icon: "help",
    text: "Bantuan",
    name: TMenu.HELP,
  },
];

const MemberLayout: React.FC<PropsWithChildren> = (props) => {
  useMenuDashboard({ menus });
  return (
    <Box sx={{ height: "100vh" }}>
      <Sidebar menus={menus} />
      <Content>
        <Stack direction="row" justifyContent={"flex-end"} gap={1}>
          <Box>
            <MenuNotifications />
          </Box>
          <Box>
            <MenuCart />
          </Box>
          <Box>
            <ProfileAvatar />
          </Box>
        </Stack>
        <Box sx={{ marginTop: "30px" }}>{props.children}</Box>
        <SnackBarComp />
      </Content>
    </Box>
  );
};

export default MemberLayout;
