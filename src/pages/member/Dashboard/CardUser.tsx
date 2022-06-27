import React from "react";
import { Card, Stack, Avatar, Box, Typography } from "@mui/material";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const CardUser: React.FC = () => {
  return (
    <Card sx={{ width: "85%" }}>
      <Stack direction="row" alignItems="center" spacing={3}>
        <Box sx={{ margin: "15px 30px" }}>
          <Avatar
            alt="User 1"
            src="https://i.pinimg.com/564x/f6/c3/79/f6c379ccfb9130cfd36c63722d5251be.jpg"
            sx={{
              height: "100px",
              width: "100px",
            }}
          />
        </Box>
        <Stack direction="column" justifyContent={"space-between"} spacing={4}>
          <Box>
            <Typography variant="h4">Abdul Latf Mubasir</Typography>
            <Typography variant="h6">member@mail.com</Typography>
          </Box>
          <Stack direction="row" spacing={5}>
            <Stack direction="row" spacing={1} alignItems="center">
              <MenuBookRoundedIcon />
              <Typography fontWeight={"bold"}>9</Typography>
              <Typography>Kelas</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <WorkspacePremiumIcon />
              <Typography fontWeight={"bold"}>3</Typography>
              <Typography>Sertifikat</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CardUser;
