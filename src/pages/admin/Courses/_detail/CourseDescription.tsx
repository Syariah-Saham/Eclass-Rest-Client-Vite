import { Card, Stack, Typography, Box, Skeleton } from "@mui/material";
import React from "react";
import { formatRp } from "../../../../helpers/formatRp";
import { parseCategory } from "../../../../helpers/parseCategory";
import { ICourse } from "../../../../interfaces/course-model";
import Rating from "./Rating";

export const CourseDescriptionSkeleton = () => {
  return (
    <Card>
      <Stack direction="column" gap={2}>
        <Box>
          <Skeleton variant="text" height="15px" width="30%" />
          <Skeleton variant="text" height="20px" width="90%" />
        </Box>
        <Box>
          <Skeleton variant="text" height="15px" width="30%" />
          <Skeleton variant="text" height="20px" width="90%" />
        </Box>
        <Box>
          <Skeleton variant="text" height="15px" width="30%" />
          <Skeleton variant="text" height="20px" width="90%" />
        </Box>
        <Skeleton variant="text" height="15px" width="30%" />
        <Skeleton variant="text" height="20px" width="90%" />
        <Box></Box>
        <Stack direction="row">
          <Box sx={{ width: "50%" }}>
            <Skeleton variant="text" height="15px" width="30%" />
            <Skeleton variant="text" height="20px" width="50%" />
          </Box>
          <Box sx={{ width: "50%" }}>
            <Skeleton variant="text" height="15px" width="30%" />
            <Skeleton variant="text" height="20px" width="50%" />
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
};

const CourseDescription: React.FC<{ course: ICourse }> = ({ course }) => {
  return (
    <Card>
      <Stack direction="column" gap={2}>
        <Box>
          <Typography variant="h6">Judul</Typography>
          <Typography>{course.title}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Judul</Typography>
          <Typography>{formatRp(course.price)}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Rating</Typography>
          <Typography>
            <Rating count={course.rating} />
          </Typography>
        </Box>
        <Stack direction="row">
          <Box sx={{ width: "50%" }}>
            <Typography variant="h6">Status</Typography>
            <Typography>{course.is_publish ? "publish" : "private"}</Typography>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography variant="h6">Level</Typography>
            <Typography>{parseCategory(course.category)}</Typography>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CourseDescription;
