import { Button, Card, Skeleton, Stack } from "@mui/material";
import React from "react";

export const CourseThumbnailSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      sx={{ height: "300px", borderRadius: "24px", width: "100%" }}
    />
  );
};

const CourseThumbnail: React.FC<{ source: string; openModal: () => void }> = ({
  source,
  openModal,
}) => {
  return (
    <>
      <Card
        sx={{
          padding: 0,
          display: "flex",
          height: "300px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={`${import.meta.env.VITE_STORAGE_URL}/${source}`}
          style={{ width: "100%" }}
          alt="course thumbnail"
        />
      </Card>
      <Stack direction="row" justifyContent="center" sx={{ marginTop: "20px" }}>
        <Button onClick={openModal} color="success">
          Upload
        </Button>
      </Stack>
    </>
  );
};

export default CourseThumbnail;
