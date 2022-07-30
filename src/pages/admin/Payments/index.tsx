import { Box } from "@mui/material";
import React from "react";
import ChartPayment from "./ChartPayment";
import TableList from "./TableList";

const Payments: React.FC = () => {
  return (
    <Box>
      <ChartPayment />
      <TableList />
    </Box>
  );
};

export default Payments;
