import { Box, Typography } from "@mui/material";
import React from "react";

const TitleSection: React.FC<{ title: string }> = (props) => {
  return (
    <Box>
      <Typography variant="h2" color="primary" fontWeight={"bold"}>
        {props.title}
      </Typography>
    </Box>
  );
};

export default TitleSection;
