import { Box, Card, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { ILesson } from "../../../../interfaces/lesson-model";

export const LessonDescriptionSkeleton: React.FC = () => {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Skeleton
        variant="text"
        width="50%"
        height="52px"
        sx={{ marginBottom: "17px" }}
      />
      <Box>
        <Card>
          <Stack direction="column" gap={3}>
            <Stack direction="column" alignItems="flex-end" gap={1}>
              <Skeleton variant="text" width="80%" height={"28px"} />
              <Skeleton variant="text" width="100%" height={"28px"} />
              <Skeleton variant="text" width="100%" height={"28px"} />
            </Stack>
            <Stack direction="column" alignItems="flex-end" gap={1}>
              <Skeleton variant="text" width="80%" height={"28px"} />
              <Skeleton variant="text" width="100%" height={"28px"} />
              <Skeleton variant="text" width="100%" height={"28px"} />
            </Stack>
            <Stack direction="column" alignItems="flex-end" gap={1}>
              <Skeleton variant="text" width="80%" height={"28px"} />
              <Skeleton variant="text" width="100%" height={"28px"} />
              <Skeleton variant="text" width="100%" height={"28px"} />
            </Stack>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

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
