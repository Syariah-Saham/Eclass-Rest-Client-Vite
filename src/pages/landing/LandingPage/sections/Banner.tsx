import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import LogoEclass from "../../../../assets/logos/logo_warna_bulat.png";
import Illustration from "../../../../assets/images/banner-illustration.svg";
import Background from "../../../../assets/images/bg-banner.svg";

const styleBanner: CSSProperties = {
  height: "100vh",
  background: `url(${Background})`,
  marginTop: -5,
  boxSizing: "border-box",
  padding: "10px 100px",
};

const Banner: React.FC = () => {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems="center"
      sx={styleBanner}
    >
      <Grid item md={6}>
        <Stack direction={"column"} sx={{ width: "90%" }} gap={5}>
          <Box>
            <img src={LogoEclass} alt="logo" style={{ height: "70px" }} />
          </Box>
          <Box>
            <Typography variant="h1" fontWeight={800} color="primary">
              Belajar Investasi di eClass
            </Typography>
            <Typography variant="body1">
              Berawal dari website syariahsaham.com mulai April 2017. Syariah
              Saham terus berusaha berkontribusi lebih intensif dalam
              mengedukasi masyarakat mengenai investasi dan trading saham
              syariah.
            </Typography>
          </Box>
          <Stack direction="row" spacing={3}>
            <Button>Kelas</Button>
            <Button variant="outlined">Mentor</Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={6}>
        <Stack justifyContent={"center"} alignItems="center">
          <img
            src={Illustration}
            alt="banner illustration"
            style={{ width: "80%" }}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Banner;
