import { Box, Typography, Card } from "@mui/material";
import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { ICourseDetailMember } from "../../interfaces/course-model";

interface ICardCourseDescription_MemberProps {
  course: ICourseDetailMember;
}
const CardCourseDescription_Member: React.FC<
  ICardCourseDescription_MemberProps
> = ({ course }) => {
  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: "17px" }}>
        Deskripsi
      </Typography>
      <Card>
        <div data-color-mode="dark" className="wmde-markdown-var">
          <MDEditor.Markdown
            style={{ padding: 15 }}
            source={course.description}
          />
        </div>
      </Card>
    </Box>
  );
};

export default CardCourseDescription_Member;
