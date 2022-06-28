import React from "react";
import CardCourseMember from "../../../components/dashboard/CardCourseMember";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const List: React.FC = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h3">Kelasku</Typography>
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
        </Grid>
      </Box>
      <Box sx={{ marginTop: "80px" }}>
        <Typography variant="h3">Kelas Populer</Typography>
        <Stack direction="row" spacing={3} sx={{ marginTop: "20px" }}>
          <Button color="secondary">Pemula</Button>
          <Button color="secondary">Menengah</Button>
          <Button color="secondary">Professional</Button>
        </Stack>
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
    </Box>
  );
};

export default List;
