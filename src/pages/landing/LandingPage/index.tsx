import { Box } from "@mui/material";
import React from "react";
import Navbtar from "./components/Navbtar";
import Banner from "./sections/Banner";
import Benefits from "./sections/Benefits";
import Courses from "./sections/Courses";
import Footer from "./sections/Footer";
import Mentors from "./sections/Mentors";
import StepsInvestment from "./sections/StepsInvestment";
import Testimonials from "./sections/Testimonials";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbtar />
      <Box sx={{ paddingTop: "70px" }}>
        <Banner />
        <StepsInvestment />
        <Courses />
        <Benefits />
        <Testimonials />
        <Mentors />
        <Footer />
      </Box>
    </div>
  );
};

export default LandingPage;
