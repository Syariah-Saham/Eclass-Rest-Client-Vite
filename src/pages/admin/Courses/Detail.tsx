import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICourseDetail } from "../../../interfaces/course-model";
import { ILesson } from "../../../interfaces/lesson-model";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../redux/hooks";
import { getCourseById } from "../../../services/courses";
import ModalAddLesson from "./ModalAddLesson";
import CourseDescription from "./_detail/CourseDescription";
import CourseDetailSkeleton from "./_detail/CourseDetailSkeleton";
import CourseLessonList from "./_detail/CourseLessonList";
import CourseMentor from "./_detail/CourseMentor";
import CourseThumbnail from "./_detail/CourseThumbnail";
import DescriptionMarkdown from "./_detail/DescriptionMarkdown";
import Navigation from "./_detail/Navigation";

const Detail: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [modalAdd, setModalAdd] = useState({
    show: false,
    onClose: () => setModalAdd({ ...modalAdd, show: false }),
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [course, setCourse] = useState<ICourseDetail | null>(null);

  const fetchCourse = async () => {
    try {
      const response = await getCourseById({ id: parseInt(id as string) });
      setCourse(response.data.course);
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourse();
  }, []);

  const appendNewLesson = (lesson: ILesson) => {
    setCourse({ ...course!, lessons: [...course!.lessons, lesson] });
  };

  return (
    <Box>
      <Navigation status={course?.is_publish} />
      {loading ? (
        <CourseDetailSkeleton />
      ) : (
        course && (
          <Grid container gap={3} wrap="wrap">
            <Grid item md={4}>
              <CourseThumbnail source={course?.thumbnail} />
            </Grid>
            <Grid item md={5}>
              <CourseDescription course={course} />
            </Grid>
            <Grid item md={2.5}>
              <CourseMentor mentor={course?.mentor} />
            </Grid>
            <Grid item md={4}>
              <CourseLessonList
                lessons={course.lessons}
                showModal={() => setModalAdd({ ...modalAdd, show: true })}
              />
            </Grid>
            <Grid item md={7.5}>
              <DescriptionMarkdown content={course?.description} />
            </Grid>
          </Grid>
        )
      )}
      <ModalAddLesson
        show={modalAdd.show}
        onClose={modalAdd.onClose}
        appendNewLesson={appendNewLesson}
      />
    </Box>
  );
};

export default Detail;
