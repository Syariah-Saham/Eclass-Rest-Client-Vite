import { Box, Card } from "@mui/material";
import React from "react";
import MDEditor from "@uiw/react-md-editor";

const CardLessonDescription_Member: React.FC<{ description: string }> = ({
  description,
}) => {
  return (
    <Box>
      <Card>
        <div data-color-mode="dark" className="wmde-markdown-var">
          <MDEditor.Markdown style={{ padding: 15 }} source={description} />
        </div>
      </Card>
    </Box>
  );
};

export default CardLessonDescription_Member;
