import { Box, Typography, Avatar, Card, Stack } from "@mui/material";
import React from "react";
import { ICourseDetailMember } from "../../interfaces/course-model";

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
            <Typography fontWeight="medium">Founder Syariah Saham</Typography>
            <Typography sx={{ marginTop: "12px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, eum
              illo quis pariatur possimus soluta dolores tempore totam, officia
              eveniet rerum animi repellendus aliquam mollitia!
            </Typography>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default CardMentorMember;
