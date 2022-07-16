import { Avatar, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import { IUser } from "../../../../interfaces/user-model";

export const CourseMentorSkeleton = () => {
  return (
    <Stack direction="column" alignItems="center" gap={2}>
      <Skeleton variant="circular" width={"200px"} height="200px" />
      <Skeleton variant="text" height="24px" width={"70%"} />
      <Skeleton variant="text" height="60px" width="100%" />
    </Stack>
  );
};

const CourseMentor: React.FC<{ mentor: IUser }> = ({ mentor }) => {
  return (
    <Stack direction="column" alignItems="center" gap={2}>
      <Avatar
        alt="User 1"
        src={`${import.meta.env.VITE_STORAGE_URL}/${mentor.profile_photo}`}
        sx={{ height: "200px", width: "200px" }}
      />
      <Typography>Mentor Pengajar</Typography>
      <Typography variant="h4">{mentor.name}</Typography>
    </Stack>
  );
};

export default CourseMentor;
