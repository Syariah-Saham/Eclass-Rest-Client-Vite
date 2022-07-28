import { Box, Typography, Card, Stack, Skeleton } from "@mui/material";
import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { ICourseDetailMember } from "../../interfaces/course-model";

export const SkeletonCardCourseDescription_Member: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: "17px" }}>
        Deskripsi
      </Typography>
      <Card>
        <Stack direction="column" gap={3}>
          {[1, 2, 3].map((item) => (
            <Stack
              key={item}
              direction={"column"}
              alignItems="flex-end"
              gap={1}
            >
              <Skeleton variant="text" height="25px" width="80%" />
              <Skeleton variant="text" height="25px" width="100%" />
              <Skeleton variant="text" height="25px" width="100%" />
              <Skeleton variant="text" height="25px" width="100%" />
            </Stack>
          ))}
        </Stack>
      </Card>
    </Box>
  );
};

interface ICardCourseDescription_MemberProps {
  course: ICourseDetailMember;
}
const CardCourseDescription_Member: React.FC<
  ICardCourseDescription_MemberProps
> = ({ course }) => {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ marginBottom: "17px", display: { xs: "none", md: "block" } }}
      >
        Deskripsi
      </Typography>
      <Typography
        variant="h5"
        sx={{ marginBottom: "17px", display: { xs: "block", md: "none" } }}
      >
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
