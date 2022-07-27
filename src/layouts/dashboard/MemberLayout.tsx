import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";
import Content from "../../components/dashboard/Content";
import Sidebar from "../../components/dashboard/Sidebar";
import SnackBarComp from "../../components/Snackbar";
import { useMenuDashboard } from "../../hooks/useMenuDashboard";
import menus from "../../constant/member-menus";
import Header from "./_MemberLayout/Header";
import BottomNav from "./_MemberLayout/BottomNav";

const MemberLayout: React.FC<PropsWithChildren> = (props) => {
  useMenuDashboard({ menus });
  return (
    <Box sx={{ height: "100vh" }}>
      <Sidebar menus={menus} />
      <BottomNav />
      <Content>
        <Header />
        <Box sx={{ marginTop: "30px" }}>{props.children}</Box>
        <SnackBarComp />
      </Content>
    </Box>
  );
};

export default MemberLayout;
