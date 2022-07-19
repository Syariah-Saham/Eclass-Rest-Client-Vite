import { Box } from "@mui/material";
import React from "react";
import { ICourseDetailMember } from "../../interfaces/course-model";

interface ICourseBanner_MemberProps {
  course: ICourseDetailMember;
}
const CourseBanner_Member: React.FC<ICourseBanner_MemberProps> = ({
  course,
}) => {
  return (
    <Box
      sx={{
        height: "300px",
        borderRadius: "26px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "35px",
      }}
    >
      <img
        style={{ width: "100%" }}
        src={`${import.meta.env.VITE_STORAGE_URL}/${course.thumbnail}`}
      />
    </Box>
  );
};

export default CourseBanner_Member;
