import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import CardCourseMember from "../../../components/dashboard/CardCourseMember";

const WishList: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3">Ingin Dipelajari</Typography>
      <Grid container spacing={5} sx={{ marginTop: "0px" }}>
        <Grid item md={3}>
          <CardCourseMember />
        </Grid>
        <Grid item md={3}>
          <CardCourseMember />
        </Grid>
        <Grid item md={3}>
          <CardCourseMember />
        </Grid>
        <Grid item md={3}>
          <CardCourseMember />
        </Grid>
        <Grid item md={3}>
          <CardCourseMember />
        </Grid>
        <Grid item md={3}>
          <CardCourseMember />
        </Grid>
        <Grid item md={3}>
          <CardCourseMember />
        </Grid>
        <Grid item md={3}>
          <CardCourseMember />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WishList;
