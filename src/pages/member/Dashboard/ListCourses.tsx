import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import CardCourseMember from "../../../components/dashboard/CardCourseMember";

const ListCourses: React.FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ marginTop: "60px" }}>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Learn With{" "}
        <b style={{ color: theme.palette.secondary.light }}>Expert</b>
      </Typography>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Anytime & Anywhere
      </Typography>
      <Stack
        direction="row"
        justifyContent={"center"}
        spacing={3}
        sx={{ marginTop: "25px" }}
      >
        <Button color="secondary">Pemula</Button>
        <Button color="secondary">Menengah</Button>
        <Button color="secondary">Professional</Button>
      </Stack>

      <Grid container spacing={5} sx={{ marginTop: "20px" }}>
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

export default ListCourses;
