import {
  Box,
  Typography,
  Card,
  Stack,
  useTheme,
  Button,
  Collapse,
} from "@mui/material";
import React, { useState } from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import { Link, useNavigate } from "react-router-dom";

const LessonItem: React.FC<{ order: number; title: string }> = (props) => {
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
      <Link to={`/member/courses/1/lesson/1`}>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            "&:hover": { color: theme.palette.secondary.main },
          }}
        >
          {props.title}
        </Typography>
      </Link>
    </Stack>
  );
};

interface ICardListLesson_Member {
  canContinue?: boolean;
}
const CardListLesson_Member: React.FC<ICardListLesson_Member> = (props) => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState<boolean>(false);
  const [lessons, setLessons] = useState([
    { id: 1, title: "1Lorem ipsum dolor sit amet lorem ipsum dolorsit amet." },
    { id: 2, title: "2Lorem ipsum dolor sit amet lorem ipsum dolorsit amet." },
    { id: 3, title: "3Lorem ipsum dolor sit amet lorem ipsum dolorsit amet." },
    { id: 4, title: "4Lorem ipsum dolor sit amet lorem ipsum dolorsit amet." },
    { id: 5, title: "5Lorem ipsum dolor sit amet lorem ipsum dolorsit amet." },
    { id: 6, title: "6Lorem ipsum dolor sit amet lorem ipsum dolorsit amet." },
    { id: 7, title: "7Lorem ipsum dolor sit amet lorem ipsum dolorsit amet." },
    { id: 8, title: "8Lorem ipsum dolor sit amet lorem ipsum dolorsit amet." },
    { id: 9, title: "9Lorem ipsum dolor sit amet lorem ipsum dolorsit amet." },
    {
      id: 10,
      title: "10Lorem ipsum dolor sit amet lorem ipsum dolorsit amet.",
    },
  ]);
  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: "17px" }}>
        Materi yang Dipelajari
      </Typography>
      <Card>
        <Stack direction="column" spacing={3}>
          {lessons.slice(0, 5).map((lesson, i) => (
            <LessonItem key={lesson.id} order={i + 1} title={lesson.title} />
          ))}
          <Collapse in={showMore}>
            <Stack direction="column" spacing={3}>
              {lessons.slice(5, lessons.length).map((lesson, i) => (
                <LessonItem
                  key={lesson.id}
                  order={i + 6}
                  title={lesson.title}
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
