import { Box, Button, Card, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";

const LessonItem: React.FC<{
  order: number;
  lesson: { id: number; title: string };
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
      <Link to={`/member/courses/1/lesson/${props.lesson.id}`}>
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
    </Stack>
  );
};

const CardLessonLearning_Member: React.FC = () => {
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
    <Card>
      <Stack direction="row" justifyContent={"space-between"}>
        <Button
          color="secondary"
          startIcon={<ArrowBackRoundedIcon />}
          size="large"
          sx={{ width: "47%" }}
        >
          Back
        </Button>
        <Button
          color="secondary"
          endIcon={<ArrowForwardRoundedIcon />}
          size="large"
          sx={{ width: "47%" }}
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
