import { Box, Stack } from "@mui/material";
import React from "react";
import CardDashboard from "./sections/CardDashboard";
import CardMentors from "./sections/CardMentors";
import ChartUser from "./sections/ChartUser";

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Stack direction="column" gap={3}>
        <CardDashboard />
        <Stack direction="row" gap={3}>
          <Box sx={{ width: "76%" }}>
            <ChartUser />
          </Box>
          <Box sx={{ width: "22%" }}>
            <CardMentors />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Dashboard;
