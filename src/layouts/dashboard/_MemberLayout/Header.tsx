import { Box, Stack } from "@mui/material";
import React from "react";
import MenuCart from "./MenuCart";
import MenuNotifications from "./MenuNotifications";
import ProfileAvatar from "./ProfileAvatar";

const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
