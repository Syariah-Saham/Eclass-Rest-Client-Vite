import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Invoice from "./Invoice";
import PaymentList from "./PaymentList";

const Payments: React.FC = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<PaymentList />} />
        <Route path="/:id/invoice" element={<Invoice />} />
      </Routes>
    </Box>
  );
};

export default Payments;
