import { Box, Card, Skeleton, Stack } from "@mui/material";
import React from "react";
import MDEditor from "@uiw/react-md-editor";

export const SkeletonCardLessonDescription_Member: React.FC = () => {
  return (
    <Card>
      <Stack direction="column" gap={3}>
        {[1, 2, 3].map((item) => (
          <Stack key={item} direction={"column"} alignItems="flex-end" gap={1}>
            <Skeleton variant="text" height="25px" width="80%" />
            <Skeleton variant="text" height="25px" width="100%" />
            <Skeleton variant="text" height="25px" width="100%" />
            <Skeleton variant="text" height="25px" width="100%" />
          </Stack>
        ))}
      </Stack>
    </Card>
  );
};

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
