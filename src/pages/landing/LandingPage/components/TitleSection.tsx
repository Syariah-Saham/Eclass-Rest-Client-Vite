import { Box, Typography } from "@mui/material";
import React from "react";

const TitleSection: React.FC<{ title: string }> = (props) => {
  return (
    <Box>
      <Typography
        sx={{ display: { xs: "none", md: "block" } }}
        variant="h2"
        color="primary"
        fontWeight={"bold"}
      >
        {props.title}
      </Typography>
      <Typography
        sx={{ display: { xs: "block", md: "none" } }}
        variant="h4"
        color="primary"
        fontWeight={"bold"}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

export default TitleSection;
