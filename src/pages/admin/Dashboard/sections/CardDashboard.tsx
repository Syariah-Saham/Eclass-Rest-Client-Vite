import {
  BadgeRounded,
  GroupRounded,
  MonitorRounded,
  SupervisedUserCircleRounded,
} from "@mui/icons-material";
import { Avatar, Box, Card, Stack, Typography, useTheme } from "@mui/material";
import React, { CSSProperties } from "react";
import { useAppSelector } from "../../../../redux/hooks";

const styleBox: CSSProperties = {
  width: "55px",
  height: "55px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "6px",
  marginRight: "30px",
};

const CardDashboard: React.FC = () => {
  const theme = useTheme();
  const auth = useAppSelector((state) => state.auth);

  return (
    <Stack direction="row" alignItems={"center"} gap={3}>
      <Box sx={{ width: "19%" }}>
        <Card sx={{ padding: "20px 30px" }}>
          <Stack direction="row" alignItems="center">
            <Box
              sx={{
                ...styleBox,
                background: theme.palette.secondary.dark,
              }}
            >
              <MonitorRounded sx={{ fontSize: "30px" }} color="inherit" />
            </Box>
            <Box>
              <Typography variant="h6">Kelas</Typography>
              <Typography variant="h5" fontWeight={"bold"}>
                20
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Box>
      <Box sx={{ width: "19%" }}>
        <Card sx={{ padding: "20px 30px" }}>
          <Stack direction="row" alignItems="center">
            <Box
              sx={{
                ...styleBox,
                background: theme.palette.success.dark,
              }}
            >
              <GroupRounded sx={{ fontSize: "30px" }} color="inherit" />
            </Box>
            <Box>
              <Typography variant="h6">Member</Typography>
              <Typography variant="h5" fontWeight={"bold"}>
                20
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Box>
      <Box sx={{ width: "19%" }}>
        <Card sx={{ padding: "20px 30px" }}>
          <Stack direction="row" alignItems="center">
            <Box
              sx={{
                ...styleBox,
                background: theme.palette.error.dark,
              }}
            >
              <SupervisedUserCircleRounded
                sx={{ fontSize: "30px" }}
                color="inherit"
              />
            </Box>
            <Box>
              <Typography variant="h6">Mentor</Typography>
              <Typography variant="h5" fontWeight={"bold"}>
                20
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Box>
      <Box sx={{ width: "19%" }}>
        <Card sx={{ padding: "20px 30px" }}>
          <Stack direction="row" alignItems="center">
            <Box
              sx={{
                ...styleBox,
                background: theme.palette.warning.dark,
              }}
            >
              <BadgeRounded sx={{ fontSize: "30px" }} color="inherit" />
            </Box>
            <Box>
              <Typography variant="h6">Admin</Typography>
              <Typography variant="h5" fontWeight={"bold"}>
                20
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Box>
      <Box sx={{ width: "24%" }}>
        <Card sx={{ padding: "20px 30px" }}>
          <Stack direction="row" alignItems="center">
            <Box
              sx={{
                ...styleBox,
              }}
            >
              <Avatar
                alt="User 1"
                src="https://i.pinimg.com/564x/f6/c3/79/f6c379ccfb9130cfd36c63722d5251be.jpg"
                sx={{ height: "60px", width: "60px" }}
              />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                {auth?.user?.role}
              </Typography>
              <Typography variant="h5" fontWeight={"bold"}>
                {auth?.user?.name}
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Box>
    </Stack>
  );
};

export default CardDashboard;
