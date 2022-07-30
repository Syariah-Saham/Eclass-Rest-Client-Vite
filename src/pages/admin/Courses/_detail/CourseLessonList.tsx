import {
  Card,
  Stack,
  Typography,
  Button,
  useTheme,
  Box,
  Skeleton,
  IconButton,
} from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ILesson } from "../../../../interfaces/lesson-model";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";

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
  lesson: ILesson;
}
const LessonItem: React.FC<ILessonItemProps> = (props) => {
  const theme = useTheme();
  const { id } = useParams();
  return (
    <Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          ...styles.boxLesson,
        }}
      >
        <Typography variant="h5">{props.order}</Typography>
      </Box>
      <Link to={`/admin/courses/${id}/lessons/${props.lesson.id}`}>
        <Typography
          sx={{
            ...styles.lessonText,
            color: theme.palette.text.primary,
            "&:hover": { color: theme.palette.secondary.main + " !important" },
          }}
        >
          {props.lesson.title}
        </Typography>
      </Link>
    </Stack>
  );
};

interface ICourseLessonListProps {
  lessons: ILesson[];
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
        <IconButton color="secondary" onClick={props.showModal}>
          <PlaylistAddRoundedIcon />
        </IconButton>
      </Stack>
      <Stack direction="column" gap={4} alignItems="center">
        {props.lessons?.map((lesson, i) => (
          <LessonItem order={i + 1} lesson={lesson} />
        ))}

        {!props.lessons.length && (
          <Typography variant="h5">Tidak ada data</Typography>
        )}
      </Stack>
    </Card>
  );
};

export default CourseLessonList;
