import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardCourseDescription_Member, {
  SkeletonCardCourseDescription_Member,
} from "../../../components/dashboard/CardCourseDescription_Member";
import CardListLesson_Member, {
  SkeletonCardListLesson_Member,
} from "../../../components/dashboard/CardListLesson_Member";
import CardMentorMember, {
  SkeletonCardMentorMember,
} from "../../../components/dashboard/CardMentorMember";
import CourseBanner_Member, {
  SkeletonCourseBanner_Member,
} from "../../../components/dashboard/CourseBanner_Member";
import { updateLastLearning } from "../../../helpers/updateLastLearning";
import { ICourseDetailMember } from "../../../interfaces/course-model";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../redux/hooks";
import { getCourseById } from "../../../services/member/courses";

const Corridor: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<ICourseDetailMember>();

  const fetchCourse = async () => {
    try {
      const response = await getCourseById({ id: parseInt(id!) });
      if (!response.data.course.is_owned) navigate(`/member/courses/${id}`);
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
    updateLastLearning(parseInt(id!));
  }, []);

  return (
    <Box>
      {loading ? (
        <>
          <Box>
            <SkeletonCourseBanner_Member />
            <Grid container spacing={5}>
              <Grid item md={6}>
                <SkeletonCardListLesson_Member />
              </Grid>
              <Grid item md={6}>
                <SkeletonCardMentorMember />
              </Grid>
              <Grid item md={12}>
                <SkeletonCardCourseDescription_Member />
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        !!course && (
          <>
            <Box>
              <CourseBanner_Member course={course} />
              <Grid container spacing={5}>
                <Grid item md={6}>
                  <CardListLesson_Member canContinue={true} course={course} />
                </Grid>
                <Grid item md={6}>
                  <CardMentorMember course={course} />
                </Grid>
                <Grid item md={12}>
                  <CardCourseDescription_Member course={course} />
                </Grid>
              </Grid>
            </Box>
          </>
        )
      )}
    </Box>
  );
};

export default Corridor;
