import { Card, Skeleton } from "@mui/material";
import React from "react";

export const CourseThumbnailSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      sx={{ height: "300px", borderRadius: "24px", width: "100%" }}
    />
  );
};

const CourseThumbnail: React.FC<{ source: string }> = ({ source }) => {
  return (
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
  );
};

export default CourseThumbnail;
