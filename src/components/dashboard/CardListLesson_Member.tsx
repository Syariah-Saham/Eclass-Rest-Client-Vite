import {
  Box,
  Typography,
  Card,
  Stack,
  useTheme,
  Button,
  Collapse,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import { Link, useNavigate } from "react-router-dom";
import {
  ICourseDetailMember,
  ICourseItemMember,
} from "../../interfaces/course-model";
import { ILesson } from "../../interfaces/lesson-model";

const LessonItem: React.FC<{
  order: number;
  lesson: ILesson;
  course: ICourseItemMember;
}> = (props) => {
  const theme = useTheme();
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
      {props.course.is_owned ? (
        <Link
          to={`/member/courses/${props.course.id}/lesson/${props.lesson.id}`}
        >
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.primary,
              "&:hover": { color: theme.palette.secondary.main },
            }}
          >
            {props.lesson.title}
          </Typography>
        </Link>
      ) : (
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            "&:hover": { color: theme.palette.secondary.main },
          }}
        >
          {props.lesson.title}
        </Typography>
      )}
    </Stack>
  );
};

interface ICardListLesson_Member {
  canContinue?: boolean;
  course: ICourseDetailMember;
}
const CardListLesson_Member: React.FC<ICardListLesson_Member> = (props) => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState<boolean>(false);
  const [lessons, setLessons] = useState<ILesson[] | []>([]);

  useEffect(() => {
    setLessons(props.course.lessons);
  }, [props.course]);

  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: "17px" }}>
        Materi yang Dipelajari
      </Typography>
      <Card>
        <Stack direction="column" spacing={3}>
          {lessons.slice(0, 5).map((lesson, i) => (
            <LessonItem
              key={lesson.id}
              order={i + 1}
              lesson={lesson}
              course={props.course}
            />
          ))}
          <Collapse in={showMore}>
            <Stack direction="column" spacing={3}>
              {lessons.slice(5, lessons.length).map((lesson, i) => (
                <LessonItem
                  key={lesson.id}
                  order={i + 6}
                  lesson={lesson}
                  course={props.course}
                />
              ))}
            </Stack>
          </Collapse>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ marginTop: "15px" }}
        >
          {props.canContinue ? (
            <>
              <Button
                sx={{ width: "47%" }}
                startIcon={<PlayCircleFilledWhiteRoundedIcon />}
                size="large"
                color="secondary"
                onClick={() => navigate(`/member/courses/1/lesson/1`)}
              >
                Lanjut Belajar
              </Button>
              <Button
                sx={{ width: "47%" }}
                startIcon={<ReadMoreIcon />}
                size="large"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Lebih Sedikit" : "Lihat Selengkapnya"}
              </Button>
            </>
          ) : (
            <>
              {lessons.length > 5 && (
                <Button
                  sx={{ width: "100%" }}
                  startIcon={<ReadMoreIcon />}
                  size="large"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Lebih Sedikit" : "Lihat Selengkapnya"}
                </Button>
              )}
            </>
          )}
        </Stack>
      </Card>
    </Box>
  );
};

export default CardListLesson_Member;
