import { Box, Grid } from "@mui/material";
import React from "react";

import SayHello from "./SayHello";
import CardUser from "./CardUser";
import ListBenefit from "./ListBenefit";
import ContinueLearning from "./ContinueLearning";
import ListCourses from "./ListCourses";

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <SayHello />
        </Grid>
        <Grid item md={6}>
          <CardUser />
        </Grid>
        <Grid item md={6}>
          <ListBenefit />
        </Grid>
        <Grid item md={6}>
          <ContinueLearning />
        </Grid>
      </Grid>

      <ListCourses />
    </Box>
  );
};

export default Dashboard;
