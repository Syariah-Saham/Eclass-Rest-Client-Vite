import { Box, Card, Typography } from "@mui/material";
import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { ILesson } from "../../../../interfaces/lesson-model";

interface ILessonDescriptionProps {
  lesson: ILesson;
}

const LessonDescription: React.FC<ILessonDescriptionProps> = (props) => {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Typography variant="h3" sx={{ marginBottom: "17px" }}>
        {props.lesson.title}
      </Typography>
      <Box>
        <Card>
          <div data-color-mode="dark" className="wmde-markdown-var">
            <MDEditor.Markdown
              style={{ padding: 15 }}
              source={props.lesson.description}
            />
          </div>
        </Card>
      </Box>
    </Box>
  );
};

export default LessonDescription;
