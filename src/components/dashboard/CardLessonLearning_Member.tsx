import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const CardLessonLearning_Member: React.FC = () => {
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
        <Typography
          variant="h5"
          sx={{ "&:hover": { textDecoration: "underline" }, cursor: "pointer" }}
        >
          1. Lorem ipsum dolor sit amet lorem ipsum Lorem ipsum dolor sit amet
          lorem ipsum
        </Typography>
        <Typography
          variant="h5"
          sx={{ "&:hover": { textDecoration: "underline" }, cursor: "pointer" }}
        >
          2. Lorem ipsum dolor sit amet lorem ipsum
        </Typography>
        <Typography variant="h5" color="secondary">
          3. Lorem ipsum dolor sit amet lorem ipsum
        </Typography>
        <Typography
          variant="h5"
          sx={{ "&:hover": { textDecoration: "underline" }, cursor: "pointer" }}
        >
          4. Lorem ipsum dolor sit amet lorem ipsum
        </Typography>
        <Typography
          variant="h5"
          sx={{ "&:hover": { textDecoration: "underline" }, cursor: "pointer" }}
        >
          5. Lorem ipsum dolor sit amet lorem ipsum
        </Typography>
        <Typography
          variant="h5"
          sx={{ "&:hover": { textDecoration: "underline" }, cursor: "pointer" }}
        >
          6. Lorem ipsum dolor sit amet lorem ipsum
        </Typography>
      </Stack>
    </Card>
  );
};

export default CardLessonLearning_Member;
