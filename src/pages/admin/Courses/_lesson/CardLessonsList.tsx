import {
  Stack,
  useTheme,
  Box,
  Typography,
  Card,
  Button,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ILesson } from "../../../../interfaces/lesson-model";
import { openSnackbar } from "../../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../../redux/hooks";
import { getLessonByCourse } from "../../../../services/lessons";
import ModalAddLesson from "../ModalAddLesson";

const styles = {
  lessonBox: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
};

const LessonItem: React.FC<{
  order: number;
  lesson: { id: number; title: string };
}> = (props) => {
  const theme = useTheme();
  const { id, lessonId } = useParams();

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        sx={{
          ...styles.lessonBox,
          background: theme.palette.background.default,
        }}
      >
        {props.order}
      </Box>
      <Link to={`/admin/courses/${id}/lessons/${props.lesson.id}`}>
        <Typography
          variant="h6"
          sx={{
            color:
              parseInt(lessonId!) === props.lesson.id
                ? theme.palette.secondary.main
                : theme.palette.text.primary,
            "&:hover": { color: theme.palette.secondary.main },
          }}
        >
          {props.lesson.title}
        </Typography>
      </Link>
    </Stack>
  );
};

const CardLessonListSkeleton: React.FC = () => {
  const results: any[] = [];

  for (let i = 0; i < 10; i++) {
    results.push(
      <Stack key={i} direction="row" alignItems="center" spacing={2}>
        <Skeleton variant="circular" sx={styles.lessonBox} />
        <Skeleton variant="text" width="75%" height="24px" />
      </Stack>
    );
  }

  return <>{results}</>;
};

const CardLessonsList: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [lessons, setLessons] = useState<ILesson[]>([]);
  const [modalAdd, setModalAdd] = useState({
    show: false,
    onClose: () => setModalAdd({ ...modalAdd, show: false }),
  });

  const fetchLessons = async () => {
    try {
      const response = await getLessonByCourse({
        courseId: parseInt(id!),
      });
      setLessons(response.data.lessons);
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
    fetchLessons();
  }, []);

  const appendNewLesson = (lesson: ILesson) => {
    setLessons([...lessons, lesson]);
    navigate(`/admin/courses/${id}/lessons/${lesson.id}`);
  };

  return (
    <Card>
      <Button
        color="secondary"
        size="large"
        sx={{ width: "100%", marginBottom: "30px" }}
        onClick={() => setModalAdd({ ...modalAdd, show: true })}
      >
        Tambah Materi
      </Button>
      <Stack direction="column" spacing={2}>
        {loading ? (
          <CardLessonListSkeleton />
        ) : (
          lessons?.map((lesson, i) => (
            <LessonItem key={lesson.id} lesson={lesson} order={i + 1} />
          ))
        )}
      </Stack>

      <ModalAddLesson
        show={modalAdd.show}
        onClose={modalAdd.onClose}
        appendNewLesson={appendNewLesson}
      />
    </Card>
  );
};

export default CardLessonsList;
