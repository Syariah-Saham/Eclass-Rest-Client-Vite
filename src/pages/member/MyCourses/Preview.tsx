import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardMentorMember, {
  SkeletonCardMentorMember,
} from "../../../components/dashboard/CardMentorMember";
import CardListLesson_Member, {
  SkeletonCardListLesson_Member,
} from "../../../components/dashboard/CardListLesson_Member";
import CardCoursePayment_Member, {
  SkeletonCardCoursePayment_Member,
} from "../../../components/dashboard/CardCoursePayment_Member";
import CardCourseDescription_Member, {
  SkeletonCardCourseDescription_Member,
} from "../../../components/dashboard/CardCourseDescription_Member";
import CourseBanner_Member, {
  SkeletonCourseBanner_Member,
} from "../../../components/dashboard/CourseBanner_Member";
import { ICourseDetailMember } from "../../../interfaces/course-model";
import { useAppDispatch } from "../../../redux/hooks";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { getCourseById } from "../../../services/member/courses";
import { useNavigate, useParams } from "react-router-dom";

const Preview: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<ICourseDetailMember>();

  const fetchCourse = async () => {
    try {
      const response = await getCourseById({ id: parseInt(id!) });
      if (response.data.course.is_owned)
        navigate(`/member/courses/${id}/corridor`);
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

  return (
    <Box>
      {loading ? (
        <>
          <Box>
            <SkeletonCourseBanner_Member />
            <Grid container spacing={5}>
              <Grid item md={8}>
                <SkeletonCardMentorMember />
                <Box sx={{ marginTop: "40px" }}>
                  <SkeletonCardListLesson_Member />
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box sx={{ marginTop: "60px" }}>
                  <SkeletonCardCoursePayment_Member />
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ marginTop: "40px" }}>
              <SkeletonCardCourseDescription_Member />
            </Box>
          </Box>
        </>
      ) : (
        !!course && (
          <>
            <CourseBanner_Member course={course} />
            <Grid container spacing={5}>
              <Grid item md={8}>
                <CardMentorMember course={course} />
                <Box sx={{ marginTop: "40px" }}>
                  <CardListLesson_Member course={course} />
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box sx={{ marginTop: "60px" }}>
                  <CardCoursePayment_Member course={course} />
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ marginTop: "40px" }}>
              <CardCourseDescription_Member course={course} />
            </Box>
          </>
        )
      )}
    </Box>
  );
};

export default Preview;
