import {
  Box,
  Card,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { formatRp } from "../../helpers/formatRp";
import { ICourseItemMember } from "../../interfaces/course-model";

const styles = {
  box: {
    width: "180px",
    height: "120px",
    borderRadius: "14px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export const CardCartSkeleton: React.FC = () => {
  return (
    <Card sx={{ width: "100%" }}>
      <Stack direction="row" spacing={3}>
        <Box sx={styles.box}>
          <Skeleton variant="rectangular" height="100%" width="100%" />
        </Box>
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{ width: "75%" }}
        >
          <Box>
            <Skeleton variant="text" height="26px" width="60%" />
            <Skeleton variant="text" height="20px" width="90%" />
            <Skeleton variant="text" height="20px" width="70%" />
          </Box>
          <Stack direction="row" spacing={5}>
            <Skeleton variant="text" height="24px" width="100px" />
            <Skeleton variant="text" height="24px" width="100px" />
          </Stack>
        </Stack>
        <Stack direction="column" justifyContent={"space-between"}>
          <Stack direction="row" justifyContent={"flex-end"} spacing={2}>
            <Skeleton variant="circular" width="35px" height="35px" />
          </Stack>
          <Skeleton variant="text" width="180px" height="40px" />
        </Stack>
      </Stack>
    </Card>
  );
};

interface ICardCartProps {
  isCart: boolean;
  course: ICourseItemMember;
  handleRemove?: (id: number) => void;
  loadingRemove?: boolean;
}
const CardCart: React.FC<ICardCartProps> = ({
  isCart,
  course,
  handleRemove,
  loadingRemove,
}) => {
  return (
    <Card sx={{ width: "100%" }}>
      <Stack direction="row" spacing={3}>
        <Box sx={styles.box}>
          <img
            style={{ height: "100%" }}
            src={`${import.meta.env.VITE_STORAGE_URL}/${course.thumbnail}`}
          />
        </Box>
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{ width: "75%" }}
        >
          <Box>
            <Typography variant="h5">{course.title}</Typography>
            <Typography>{course.short_description}</Typography>
          </Box>
          <Stack direction="row" spacing={5}>
            <Stack
              direction="row"
              alignItems={"center"}
              spacing={1}
              sx={{ width: "200px" }}
            >
              <VideoLibraryRoundedIcon />
              <Typography fontWeight={"medium"}>
                {course.total_lessons} Materi
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems={"center"}
              spacing={1}
              sx={{ width: "200px" }}
            >
              <GroupsRoundedIcon />
              <Typography fontWeight={"medium"}>120 Siswa</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="column" justifyContent={"space-between"}>
          <Stack direction="row" justifyContent={"flex-end"} spacing={2}>
            {!isCart ? (
              <IconButton size="large" color="info">
                <AddShoppingCartRoundedIcon />
              </IconButton>
            ) : (
              <IconButton
                size="large"
                color="error"
                onClick={handleRemove?.bind(null, course.id)}
                disabled={loadingRemove}
              >
                <DeleteOutlineRoundedIcon />
              </IconButton>
            )}
          </Stack>
          <Typography variant="h4">{formatRp(course.price)}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CardCart;
