import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import IFrame from "react-iframe";
import CardLessonDescription_Member from "../../../components/dashboard/CardLessonDescription_Member";
import CardLessonLearning_Member from "../../../components/dashboard/CardLessonLearning_Member";
import ChartProgressLearning_Member from "../../../components/dashboard/ChartProgressLearning_Member";

const Lesson: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item md={8}>
          <Box sx={{ borderRadius: "22px", overflow: "hidden" }}>
            <IFrame
              url="https://www.youtube.com/embed/gRFnbc5pcBI"
              width={"100%"}
              height="700"
              position="relative"
              frameBorder={0}
            />
          </Box>
          <Box sx={{ marginTop: "40px" }}>
            <Typography variant="h3" sx={{ marginBottom: "17px" }}>
              Lorem ipsum dolor sit amet
            </Typography>
            <CardLessonDescription_Member />
          </Box>
        </Grid>
        <Grid item md={4}>
          <ChartProgressLearning_Member />
          <Box sx={{ marginTop: "25px" }}>
            <CardLessonLearning_Member />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Lesson;
