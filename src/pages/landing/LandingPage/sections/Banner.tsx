import {
  Box,
  Button,
  Grid,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import React from "react";
import LogoEclass from "../../../../assets/logos/logo_warna_bulat.png";
import Illustration from "../../../../assets/images/banner-illustration.svg";
import Background from "../../../../assets/images/bg-banner.svg";
import { Link } from "react-router-dom";

const styleBanner: SxProps<Theme> = {
  height: { md: "100vh" },
  background: `url(${Background})`,
  marginTop: { xs: 2, md: -5 },
  boxSizing: "border-box",
  padding: { xs: "10px 20px", md: "10px 100px" },
};

const Banner: React.FC = () => {
  return (
    <>
      <Grid
        container
        justifyContent={{ md: "space-between" }}
        alignItems={{ md: "center" }}
        direction={{ xs: "column-reverse", md: "row" }}
        sx={styleBanner}
      >
        <Grid item md={6}>
          <Stack
            direction={"column"}
            sx={{ width: "90%" }}
            gap={{ xs: 2, md: 5 }}
          >
            <Box>
              <img src={LogoEclass} alt="logo" style={{ height: "70px" }} />
            </Box>
            <Box>
              <Typography
                sx={{ display: { md: "block", xs: "none" } }}
                variant={"h1"}
                fontWeight={800}
                color="primary"
              >
                Belajar Investasi di eClass
              </Typography>
              <Typography
                sx={{ display: { md: "none", xs: "block" } }}
                variant={"h4"}
                fontWeight={800}
                color="primary"
              >
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
              <Link to="/register">
                <Button>Daftar</Button>
              </Link>
              <Link to="/login">
                <Button variant="outlined">Masuk</Button>
              </Link>
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
    </>
  );
};

export default Banner;
