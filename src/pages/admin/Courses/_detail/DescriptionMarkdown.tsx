import { Card, Stack, Typography, Button, Box, Skeleton } from "@mui/material";
import React from "react";
import MDEditor from "@uiw/react-md-editor";

export const DescriptionMarkdownSkeleton = () => {
  return (
    <Card>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ marginBottom: "10px" }}
      >
        <Typography variant="h5">Deskripsi</Typography>
        <Button color="success">Edit</Button>
      </Stack>
      <Stack direction="column" gap={3} sx={{ marginTop: "20px" }}>
        <Stack direction={"column"} alignItems="flex-end" gap={1}>
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
        </Stack>
        <Stack direction={"column"} alignItems="flex-end" gap={1}>
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
        </Stack>
        <Stack direction={"column"} alignItems="flex-end" gap={1}>
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
        </Stack>
      </Stack>
    </Card>
  );
};

const DescriptionMarkdown: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Card>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ marginBottom: "10px" }}
      >
        <Typography variant="h5">Deskripsi</Typography>
        <Button color="success">Edit</Button>
      </Stack>
      <Box>
        <div data-color-mode="dark" className="wmde-markdown-var">
          <MDEditor.Markdown style={{ padding: 15 }} source={content} />
        </div>
      </Box>
    </Card>
  );
};

export default DescriptionMarkdown;
