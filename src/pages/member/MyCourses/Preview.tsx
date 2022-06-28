import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import CardMentorMember from "../../../components/dashboard/CardMentorMember";
import CardListLesson_Member from "../../../components/dashboard/CardListLesson_Member";
import CardCoursePayment_Member from "../../../components/dashboard/CardCoursePayment_Member";
import CardCourseDescription_Member from "../../../components/dashboard/CardCourseDescription_Member";
import CourseBanner_Member from "../../../components/dashboard/CourseBanner_Member";

const Preview: React.FC = () => {
  return (
    <Box>
      <CourseBanner_Member />
      <Grid container spacing={5}>
        <Grid item md={8}>
          <CardMentorMember />
          <Box sx={{ marginTop: "40px" }}>
            <CardListLesson_Member />
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box sx={{ marginTop: "60px" }}>
            <CardCoursePayment_Member />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "40px" }}>
        <CardCourseDescription_Member />
      </Box>
    </Box>
  );
};

export default Preview;
