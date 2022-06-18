import { Typography } from "@mui/material";
import React from "react";
import { StyleGuideMainSection, StyleGuideSection } from "./StyleGuide";

const Typographys: React.FC = () => {
  return (
    <StyleGuideMainSection>
      <StyleGuideSection title="Typography">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography variant="body1">Heading 6</Typography>
        <Typography variant="body2">Heading 6</Typography>
        <Typography variant="subtitle1">Heading 6</Typography>
        <Typography variant="subtitle2">Heading 6</Typography>
        <Typography variant="button">Heading 6</Typography>
        <Typography variant="caption">Heading 6</Typography>
      </StyleGuideSection>
    </StyleGuideMainSection>
  );
};

export default Typographys;
