import { Box, Grid } from "@mui/material";
import React from "react";
import CardCourseDescription_Member from "../../../components/dashboard/CardCourseDescription_Member";
import CardListLesson_Member from "../../../components/dashboard/CardListLesson_Member";
import CardMentorMember from "../../../components/dashboard/CardMentorMember";
import CourseBanner_Member from "../../../components/dashboard/CourseBanner_Member";

const Corridor: React.FC = () => {
  return (
    <Box>
      <CourseBanner_Member />
      <Grid container spacing={5}>
        <Grid item md={6}>
          <CardListLesson_Member canContinue={true} />
        </Grid>
        <Grid item md={6}>
          <CardMentorMember />
        </Grid>
        <Grid item md={12}>
          <CardCourseDescription_Member />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Corridor;
