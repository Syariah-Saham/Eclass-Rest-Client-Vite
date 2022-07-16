import { Grid } from "@mui/material";
import React from "react";
import { CourseDescriptionSkeleton } from "./CourseDescription";
import { CourseLessonListSkeleton } from "./CourseLessonList";
import { CourseMentorSkeleton } from "./CourseMentor";
import { CourseThumbnailSkeleton } from "./CourseThumbnail";
import { DescriptionMarkdownSkeleton } from "./DescriptionMarkdown";

const CourseDetailSkeleton: React.FC = () => {
  return (
    <Grid container gap={3} wrap="wrap">
      <Grid item md={4}>
        <CourseThumbnailSkeleton />
      </Grid>
      <Grid item md={5}>
        <CourseDescriptionSkeleton />
      </Grid>
      <Grid item md={2.5}>
        <CourseMentorSkeleton />
      </Grid>
      <Grid item md={4}>
        <CourseLessonListSkeleton />
      </Grid>
      <Grid item md={7.5}>
        <DescriptionMarkdownSkeleton />
      </Grid>
    </Grid>
  );
};

export default CourseDetailSkeleton;
