import {
  BadgeRounded,
  GroupRounded,
  MonitorRounded,
  SupervisedUserCircleRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Fade,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { CSSProperties, useEffect, useState } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { getTotalAdmins } from "../../../../services/admins";
import { getTotalMembers } from "../../../../services/members";
import { getTotalMentors } from "../../../../services/mentors";

const styleBox: CSSProperties = {
  width: "55px",
  height: "55px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "6px",
  marginRight: "30px",
};

const CardSkeleton = () => {
  return (
    <Box sx={{ height: "60px" }}>
      <Stack direction="row" alignItems="center">
        <Skeleton
          variant="rectangular"
          width={50}
          height={50}
          sx={{ borderRadius: "6px" }}
        ></Skeleton>
        <Box sx={{ width: "70%", marginLeft: "30px" }}>
          <Skeleton
            variant="text"
            sx={{ width: "50%", marginBottom: "6px", height: "20px" }}
          />
          <Skeleton variant="text" sx={{ width: "100%", height: "25px" }} />
        </Box>
      </Stack>
    </Box>
  );
};

const CardDashboard: React.FC = () => {
  const theme = useTheme();
  const auth = useAppSelector((state) => state.auth);
  const [totalAdmins, setTotalAdmins] = useState<{
    loading: boolean;
    total: number;
  }>({
    loading: true,
    total: 0,
  });
  const [totalMembers, setTotalMembers] = useState<{
    loading: boolean;
    total: number;
  }>({
    loading: true,
    total: 0,
  });
  const [totalMentors, setTotalMentors] = useState<{
    loading: boolean;
    total: number;
  }>({
    loading: true,
    total: 0,
  });

  const getData = async () => {
    try {
      const response = await getTotalAdmins();
      setTotalAdmins({ loading: false, total: response.data.total_admins });
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await getTotalMembers();
      setTotalMembers({ loading: false, total: response.data.total_members });
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await getTotalMentors();
      setTotalMentors({ loading: false, total: response.data.total_mentors });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
          {totalMembers.loading ? (
            <CardSkeleton />
          ) : (
            <Fade in={!totalMembers.loading} timeout={400}>
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
                    {totalMembers.total}
                  </Typography>
                </Box>
              </Stack>
            </Fade>
          )}
        </Card>
      </Box>
      <Box sx={{ width: "19%" }}>
        <Card sx={{ padding: "20px 30px" }}>
          {totalMentors.loading ? (
            <CardSkeleton />
          ) : (
            <Fade in={!totalMentors.loading} timeout={400}>
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
                    {totalMentors.total}
                  </Typography>
                </Box>
              </Stack>
            </Fade>
          )}
        </Card>
      </Box>
      <Box sx={{ width: "19%" }}>
        <Card sx={{ padding: "20px 30px" }}>
          {totalMentors.loading ? (
            <CardSkeleton />
          ) : (
            <Fade in={!totalMentors.loading} timeout={400}>
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
                    {totalAdmins.total}
                  </Typography>
                </Box>
              </Stack>
            </Fade>
          )}
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
                src={`${import.meta.env.VITE_STORAGE_URL}/${
                  auth.user?.profile_photo
                }`}
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
