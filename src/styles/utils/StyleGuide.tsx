import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import {
  StyleGuideMainSectionProps,
  StyleGuideSectionProps,
} from "../../interfaces/styles/style-guide";
import Buttons from "./Buttons";
import Forms from "./Forms";
import Typographys from "./Typographys";

export const StyleGuideMainSection: React.FC<StyleGuideMainSectionProps> = (
  props
) => {
  return (
    <Box sx={{ marginTop: 20 }}>
      <Stack direction={"column"} spacing={4}>
        {props.children}
      </Stack>
    </Box>
  );
};

export const StyleGuideSection: React.FC<StyleGuideSectionProps> = (props) => {
  return (
    <Box>
      <Stack direction={"column"} spacing={2}>
        <Typography variant="h3">{props.title}</Typography>
        {props.children}
      </Stack>
    </Box>
  );
};

const StyleGuide: React.FC = () => {
  return (
    <Container sx={{ paddingTop: "100px", paddingBottom: "50px" }}>
      <Typographys />
      <Forms />
      <Buttons />
    </Container>
  );
};

export default StyleGuide;
