import { Box } from "@mui/material";
import React, { useState } from "react";
import Navbtar from "./components/Navbtar";
import Sidebar from "./components/Sidebar";
import Banner from "./sections/Banner";
import Benefits from "./sections/Benefits";
import Courses from "./sections/Courses";
import Footer from "./sections/Footer";
import Mentors from "./sections/Mentors";
import StepsInvestment from "./sections/StepsInvestment";
import Testimonials from "./sections/Testimonials";

const LandingPage: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  return (
    <div>
      <Navbtar
        isOpenSidebar={isOpenSidebar}
        toggleSidebar={() => setIsOpenSidebar(!isOpenSidebar)}
      />
      <Sidebar isOpen={isOpenSidebar} />
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
