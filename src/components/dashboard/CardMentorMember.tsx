import { Box, Typography, Avatar, Card, Stack, Skeleton } from "@mui/material";
import React from "react";
import { ICourseDetailMember } from "../../interfaces/course-model";

export const SkeletonCardMentorMember: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: "17px" }}>
        Mentor Pengajar
      </Typography>
      <Card>
        <Stack direction="row" sx={{ padding: "25px" }} spacing={4}>
          <Skeleton variant="circular" width="35%" height="auto" />
          <Box sx={{ width: "100%" }}>
            <Skeleton variant="text" sx={{ width: "30%", height: "40px" }} />
            <Skeleton variant="text" sx={{ width: "100%", height: "25px" }} />
            <Skeleton variant="text" sx={{ width: "100%", height: "25px" }} />
            <Skeleton variant="text" sx={{ width: "60%", height: "25px" }} />
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

interface ICardMentorMemberProps {
  course: ICourseDetailMember;
}
const CardMentorMember: React.FC<ICardMentorMemberProps> = ({ course }) => {
  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: "17px" }}>
        Mentor Pengajar
      </Typography>
      <Card>
        <Stack direction="row" sx={{ padding: "25px" }} spacing={4}>
          <Box
            sx={{
              width: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="User 1"
              src={`${import.meta.env.VITE_STORAGE_URL}/${
                course.mentor.profile_photo
              }`}
              sx={{ height: "150px", width: "150px" }}
            />
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="bold">
              {course.mentor.name}
            </Typography>
            <Typography fontWeight="medium">
              {course.mentor.occupation}
            </Typography>
            <Typography sx={{ marginTop: "12px" }}>
              {course.mentor.short_profile}
            </Typography>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default CardMentorMember;
