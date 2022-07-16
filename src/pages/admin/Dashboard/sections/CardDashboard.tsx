import {
  BadgeRounded,
  FaceRounded,
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
import { IDashboardGetDataCountResponse } from "../../../../interfaces/api/admin/dashboard";
import { openSnackbar } from "../../../../redux/actions/snackbar";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getDataCount } from "../../../../services/dashboard";

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

interface ICardItem {
  loading: boolean;
  name: string;
  total: number;
  icon: "courses" | "members" | "mentors" | "admins";
}
const CardItem: React.FC<ICardItem> = (props) => {
  const theme = useTheme();
  const icons = {
    courses: <MonitorRounded sx={{ fontSize: "30px" }} color="inherit" />,
    members: <GroupRounded sx={{ fontSize: "30px" }} color="inherit" />,
    mentors: (
      <SupervisedUserCircleRounded sx={{ fontSize: "30px" }} color="inherit" />
    ),
    admins: <BadgeRounded sx={{ fontSize: "30px" }} color="inherit" />,
  };
  const color = {
    courses: theme.palette.info.dark,
    members: theme.palette.success.dark,
    mentors: theme.palette.error.dark,
    admins: theme.palette.warning.dark,
  };

  return (
    <Box sx={{ width: "19%" }}>
      <Card sx={{ padding: "20px 30px" }}>
        <Fade in={!props.loading} timeout={700}>
          <Stack direction="row" alignItems="center">
            <Box
              sx={{
                ...styleBox,
                background: color[props.icon],
              }}
            >
              {icons[props.icon]}
            </Box>
            <Box>
              <Typography variant="h6">{props.name}</Typography>
              <Typography variant="h5" fontWeight={"bold"}>
                {props.total}
              </Typography>
            </Box>
          </Stack>
        </Fade>
      </Card>
    </Box>
  );
};

const CardDashboard: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IDashboardGetDataCountResponse>({
    courses: 0,
    admins: 0,
    mentors: 0,
    members: 0,
  });

  const getData = async () => {
    try {
      const response = await getDataCount();
      setData(response.data);
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Stack direction="row" alignItems={"center"} gap={3}>
      {loading ? (
        <>
          {[1, 2, 3, 4].map((item) => (
            <Box key={item} sx={{ width: "19%" }}>
              <Card sx={{ padding: "20px 30px" }}>
                <CardSkeleton />
              </Card>
            </Box>
          ))}
        </>
      ) : (
        <>
          <CardItem
            icon="courses"
            loading={loading}
            name="Kelas"
            total={data.courses}
          />
          <CardItem
            icon="members"
            loading={loading}
            name="Member"
            total={data.members}
          />
          <CardItem
            icon="mentors"
            loading={loading}
            name="Mentor"
            total={data.mentors}
          />
          <CardItem
            icon="admins"
            loading={loading}
            name="Admin"
            total={data.admins}
          />
        </>
      )}
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
