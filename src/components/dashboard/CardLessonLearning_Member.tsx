import {
  Box,
  Button,
  Card,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ILesson } from "../../interfaces/lesson-model";

export const SkeletonCardLessonLearning_Member = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: "17px" }}>
        Materi yang Dipelajari
      </Typography>
      <Card>
        <Stack direction="column" gap={3}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Stack key={item} direction="row" alignItems="center" gap={3}>
              <Skeleton
                variant="circular"
                sx={{ width: "40px", height: "40px" }}
              />
              <Skeleton variant="text" sx={{ width: "80%", height: "24px" }} />
            </Stack>
          ))}
        </Stack>
      </Card>
    </Box>
  );
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
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: theme.palette.background.default,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        {props.order}
      </Box>
      <Link to={`/member/courses/${id}/lesson/${props.lesson.id}`}>
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

const CardLessonLearning_Member: React.FC<{ lessons: ILesson[] }> = ({
  lessons,
}) => {
  const { id, lessonId } = useParams();
  const navigate = useNavigate();
  const [nextId, setNextId] = useState<number | null>(null);
  const [backId, setBackId] = useState<number | null>(null);

  useEffect(() => {
    const currentIndex = lessons.findIndex(
      (lesson) => lesson.id === parseInt(lessonId!)
    );
    setNextId(lessons[currentIndex + 1]?.id);
    setBackId(lessons[currentIndex - 1]?.id);
  }, [lessonId]);

  return (
    <Card>
      <Stack direction="row" justifyContent={"space-between"}>
        <Button
          color="secondary"
          startIcon={<ArrowBackRoundedIcon />}
          size="large"
          sx={{ width: "47%" }}
          disabled={!backId}
          onClick={() => navigate(`/member/courses/${id}/lesson/${backId}`)}
        >
          Back
        </Button>
        <Button
          color="secondary"
          endIcon={<ArrowForwardRoundedIcon />}
          size="large"
          sx={{ width: "47%" }}
          disabled={!nextId}
          onClick={() => navigate(`/member/courses/${id}/lesson/${nextId}`)}
        >
          Next
        </Button>
      </Stack>
      <Stack direction="column" spacing={2} sx={{ marginTop: "36px" }}>
        {lessons.map((lesson, i) => (
          <LessonItem key={lesson.id} lesson={lesson} order={i + 1} />
        ))}
      </Stack>
    </Card>
  );
};

export default CardLessonLearning_Member;
