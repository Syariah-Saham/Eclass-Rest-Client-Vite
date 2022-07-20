import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import IFrame from "react-iframe";
import { useLocation, useParams } from "react-router-dom";
import CardLessonDescription_Member from "../../../components/dashboard/CardLessonDescription_Member";
import CardLessonLearning_Member from "../../../components/dashboard/CardLessonLearning_Member";
import ChartProgressLearning_Member from "../../../components/dashboard/ChartProgressLearning_Member";
import { ILesson } from "../../../interfaces/lesson-model";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../redux/hooks";
import {
  getLessonById,
  getLessonsByCourseId,
} from "../../../services/member/lessons";

const Lesson: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id, lessonId } = useParams();
  const [loadingLesson, setLoadingLesson] = useState(true);
  const [loadingLessons, setLoadingLessons] = useState(true);
  const [lessons, setLessons] = useState<ILesson[] | []>([]);
  const [lesson, setLesson] = useState<ILesson | null>(null);

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
  }, []);

  useEffect(() => {
    setLoadingLesson(true);
    fetchLesson();
  }, [lessonId]);

  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item md={8}>
          {loadingLesson && <p>loading...</p>}

          {!loadingLesson && (
            <>
              <Box sx={{ borderRadius: "22px", overflow: "hidden" }}>
                <IFrame
                  url={`https://www.youtube.com/embed/${lesson?.video_id}`}
                  width={"100%"}
                  height="700"
                  position="relative"
                  frameBorder={0}
                />
              </Box>
              <Box sx={{ marginTop: "40px" }}>
                <Typography variant="h3" sx={{ marginBottom: "17px" }}>
                  {lesson?.title}
                </Typography>
                <CardLessonDescription_Member
                  description={lesson?.description || ""}
                />
              </Box>
            </>
          )}
        </Grid>
        <Grid item md={4}>
          <ChartProgressLearning_Member />
          <Box sx={{ marginTop: "25px" }}>
            {loadingLessons && <p>Loading ...</p>}
            {!loadingLessons && <CardLessonLearning_Member lessons={lessons} />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Lesson;
