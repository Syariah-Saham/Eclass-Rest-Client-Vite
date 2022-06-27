import { Box, Container } from "@mui/material";
import React, { PropsWithChildren } from "react";

const SectionLayout: React.FC<PropsWithChildren> = (props) => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ margin: { xs: "50px auto", md: "100px auto" } }}>
        {props.children}
      </Box>
    </Container>
  );
};

export default SectionLayout;
