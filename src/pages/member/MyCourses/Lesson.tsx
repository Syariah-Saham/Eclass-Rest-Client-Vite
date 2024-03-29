import { Box, Grid, Typography, Stack, Button, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IFrame from "react-iframe";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CardLessonDescription_Member, {
  SkeletonCardLessonDescription_Member,
} from "../../../components/dashboard/CardLessonDescription_Member";
import CardLessonLearning_Member, {
  SkeletonCardLessonLearning_Member,
} from "../../../components/dashboard/CardLessonLearning_Member";
import ChartProgressLearning_Member from "../../../components/dashboard/ChartProgressLearning_Member";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { ICourseItemMember } from "../../../interfaces/course-model";
import { ILesson } from "../../../interfaces/lesson-model";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../redux/hooks";
import {
  getLessonById,
  getLessonsByCourseId,
  toggleStatusLessonLearning,
} from "../../../services/member/lessons";

const SkeletonLoadingLesson = () => {
  return (
    <Box>
      <Skeleton
        variant="rectangular"
        sx={{ width: "100%", height: "700px", borderRadius: "22px" }}
      />
      <Box sx={{ marginTop: "40px" }}>
        <Skeleton
          variant="text"
          sx={{ width: "30%", height: "50px", marginBottom: "10px" }}
        />
        <SkeletonCardLessonDescription_Member />
      </Box>
    </Box>
  );
};

const Lesson: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id, lessonId } = useParams();
  const [loadingLesson, setLoadingLesson] = useState(true);
  const [loadingLessons, setLoadingLessons] = useState(true);
  const [loadingToggle, setLoadingToggle] = useState(false);
  const [lessons, setLessons] = useState<ILesson[] | []>([]);
  const [lesson, setLesson] = useState<ILesson | null>(null);
  const [course, setCourse] = useState<ICourseItemMember | null>(null);
  const [percentProgress, setPercentProgress] = useState(0);

  const fetchLesson = async () => {
    try {
      const response = await getLessonById({ id: parseInt(lessonId!) });
      setLesson(response.data.lesson);
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    } finally {
      setLoadingLesson(false);
    }
  };

  const fetchLessons = async () => {
    try {
      const response = await getLessonsByCourseId({ courseId: parseInt(id!) });
      setLessons(response.data.lessons);
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    } finally {
      setLoadingLessons(false);
    }
  };

  useEffect(() => {
    fetchLesson();
    fetchLessons();
    const newLocation = location as { state: { course: ICourseItemMember } };
    if (newLocation.state?.course) {
      setCourse(newLocation.state.course);
    } else {
      navigate("/member/courses");
    }
  }, []);

  useEffect(() => {
    setLoadingLesson(true);
    fetchLesson();
  }, [lessonId]);

  useEffect(() => {
    if (lessons.length) {
      let total = 0;
      let dones = 0;
      lessons.forEach((lesson) => {
        if (lesson.is_done) dones++;
        total++;
      });
      setPercentProgress((dones / total) * 100);
    }
  }, [lessons]);

  const updateLessonsWhenToggle = (id: number | undefined, status: boolean) => {
    const result = lessons.map((item) => {
      if (item.id === id) {
        return { ...item, is_done: status ? 1 : 0 };
      }
      return item;
    });
    setLessons(result);
  };

  const handleToggleStatus = async () => {
    setLoadingToggle(true);
    try {
      const response = await toggleStatusLessonLearning({ id: lesson?.id! });
      if (response.data.certificate_id) {
        navigate(`/certificate/${response.data.certificate_id}`);
      } else {
        if (response.data.status) {
          setLesson({ ...lesson!, is_done: 1 });
          updateLessonsWhenToggle(lesson?.id, true);
        } else {
          setLesson({ ...lesson!, is_done: 0 });
          updateLessonsWhenToggle(lesson?.id, false);
        }
      }
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    } finally {
      setLoadingToggle(false);
    }
  };

  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item md={8}>
          {loadingLesson && <SkeletonLoadingLesson />}

          {!loadingLesson && (
            <>
              <Box
                sx={{
                  borderRadius: "22px",
                  overflow: "hidden",
                  display: { xs: "none", md: "block" },
                }}
              >
                <IFrame
                  url={`https://www.youtube.com/embed/${lesson?.video_id}`}
                  width={"100%"}
                  height="700"
                  position="relative"
                  frameBorder={0}
                />
              </Box>
              <Box
                sx={{
                  borderRadius: "22px",
                  overflow: "hidden",
                  display: { xs: "block", md: "none" },
                }}
              >
                <IFrame
                  url={`https://www.youtube.com/embed/${lesson?.video_id}`}
                  width={"100%"}
                  height="360"
                  position="relative"
                  frameBorder={0}
                />
              </Box>
              <Box
                sx={{
                  marginTop: { xs: "20px", md: "40px" },
                }}
              >
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  sx={{ marginBottom: "20px" }}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: "17px",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    {lesson?.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      marginBottom: "17px",
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {lesson?.title}
                  </Typography>
                  {course?.certificate_id ? (
                    <Link to={`/certificate/${course.certificate_id}`}>
                      <Button color="secondary">Lihat Sertifikat</Button>
                    </Link>
                  ) : parseInt(lesson?.is_done?.toString() || "0") === 1 ? (
                    <Button
                      disabled={loadingToggle}
                      onClick={handleToggleStatus}
                      color="warning"
                    >
                      {loadingToggle ? (
                        <LoadingIndicator />
                      ) : (
                        "Tandai Belum Selesai"
                      )}
                    </Button>
                  ) : (
                    <Button
                      disabled={loadingToggle}
                      onClick={handleToggleStatus}
                      color="secondary"
                    >
                      {loadingToggle ? <LoadingIndicator /> : "Tandai Selesai"}
                    </Button>
                  )}
                </Stack>
                <CardLessonDescription_Member
                  description={lesson?.description || ""}
                />
              </Box>
            </>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <ChartProgressLearning_Member value={percentProgress} />
          <Box sx={{ marginTop: "25px" }}>
            {loadingLessons && <SkeletonCardLessonLearning_Member />}
            {!loadingLessons && (
              <CardLessonLearning_Member
                lessons={lessons}
                lesson={lesson}
                handleToggleStatus={handleToggleStatus}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Lesson;
