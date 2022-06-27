import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import CardCertificateMember from "../../../components/dashboard/CardCertificateMember";
import CardCourseMember from "../../../components/dashboard/CardCourseMember";

const Certificates: React.FC = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h3">Sertifikat</Typography>
        <Grid container spacing={5} sx={{ marginTop: "0px" }}>
          <Grid item md={3}>
            <CardCertificateMember />
          </Grid>
          <Grid item md={3}>
            <CardCertificateMember />
          </Grid>
          <Grid item md={3}>
            <CardCertificateMember />
          </Grid>
          <Grid item md={3}>
            <CardCertificateMember />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: "80px" }}>
        <Typography variant="h3">Lanjut Belajar</Typography>
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
    </Box>
  );
};

export default Certificates;
