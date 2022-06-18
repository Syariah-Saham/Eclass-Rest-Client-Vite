import React from "react";
import LoadingIconWhite from "../assets/icons/loading-indicator-white.png";
import { Box } from "@mui/material";

const LoadingIndicator: React.FC = () => {
  return (
    <Box sx={{ transform: "translateY(4px)" }}>
      <img src={LoadingIconWhite} className="loading-icon" alt="Loading Icon" />
    </Box>
  );
};

export default LoadingIndicator;
