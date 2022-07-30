import {
  Card,
  Stack,
  Typography,
  Button,
  Box,
  Skeleton,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import ModalEditDescription from "../../../../components/modals/ModalEditDescription";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";

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

const DescriptionMarkdown: React.FC<{
  courseId: number;
  content: string;
  updateDescription: (description: string) => void;
}> = ({ courseId, content, updateDescription }) => {
  const [modalEdit, setModalEdit] = useState({
    show: false,
    value: content,
  });

  return (
    <>
      <Card>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ marginBottom: "10px" }}
        >
          <Typography variant="h5">Deskripsi</Typography>
          <IconButton
            color="success"
            onClick={() => setModalEdit({ ...modalEdit, show: true })}
          >
            <CreateRoundedIcon />
          </IconButton>
        </Stack>
        <Box>
          <div data-color-mode="dark" className="wmde-markdown-var">
            <MDEditor.Markdown style={{ padding: 15 }} source={content} />
          </div>
        </Box>
      </Card>

      <ModalEditDescription
        show={modalEdit.show}
        onClose={() => setModalEdit({ ...modalEdit, show: false })}
        value={content}
        type="course"
        rowId={courseId}
        onUpdate={updateDescription}
      />
    </>
  );
};

export default DescriptionMarkdown;
