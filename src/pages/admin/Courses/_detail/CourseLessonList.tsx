import {
  Card,
  Stack,
  Typography,
  Button,
  useTheme,
  Box,
  Skeleton,
} from "@mui/material";
import React from "react";

const styles = {
  boxLesson: {
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    position: "absolute",
  },
  lessonText: {
    width: "100%",
    marginLeft: "12px",
    paddingLeft: "55px",
  },
};

const LessonItemSkeleton = () => {
  return (
    <Stack direction="row" alignItems="center" sx={{ width: "100%" }} gap={2}>
      <Skeleton variant="circular" width="50px" height="50px" />
      <Skeleton variant="text" height="24px" width="80%" />
    </Stack>
  );
};

export const CourseLessonListSkeleton = () => {
  return (
    <Card>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ marginBottom: "15px" }}
      >
        <Typography variant="h5">Materi</Typography>
        <Button color="secondary">Tambah</Button>
      </Stack>
      <Stack direction="column" gap={2} alignItems="center">
        <LessonItemSkeleton />
        <LessonItemSkeleton />
        <LessonItemSkeleton />
      </Stack>
    </Card>
  );
};

interface ILessonItemProps {
  order: number;
}
const LessonItem: React.FC<ILessonItemProps> = (props) => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center">
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          ...styles.boxLesson,
        }}
      >
        <Typography variant="h5">{props.order}</Typography>
      </Box>
      <Typography sx={styles.lessonText}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
        quas?
      </Typography>
    </Stack>
  );
};

interface ICourseLessonListProps {
  showModal: () => void;
}

const CourseLessonList: React.FC<ICourseLessonListProps> = (props) => {
  return (
    <Card>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ marginBottom: "15px" }}
      >
        <Typography variant="h5">Materi</Typography>
        <Button color="secondary" onClick={props.showModal}>
          Tambah
        </Button>
      </Stack>
      <Stack direction="column" gap={2} alignItems="center">
        <LessonItem order={1} />
        <LessonItem order={2} />
        <LessonItem order={3} />
        <LessonItem order={4} />
        <LessonItem order={5} />
        <LessonItem order={6} />
        <LessonItem order={7} />
      </Stack>
    </Card>
  );
};

export default CourseLessonList;
