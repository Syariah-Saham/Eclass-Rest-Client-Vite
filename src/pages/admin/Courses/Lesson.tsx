import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ILesson } from "../../../interfaces/lesson-model";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../redux/hooks";
import { getLessonById } from "../../../services/lessons";
import CardLessonsList from "./_lesson/CardLessonsList";
import LessonDescription from "./_lesson/LessonDescription";
import Navigation from "./_lesson/Navigation";
import VideoFrame from "./_lesson/VideoFrame";

const Lesson: React.FC = () => {
  const { lessonId } = useParams();
  const dispatch = useAppDispatch();
  const [lesson, setLesson] = useState<ILesson | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLesson();
  }, [lessonId]);

  return (
    <Box>
      <Navigation />
      <Grid container spacing={5}>
        <Grid item md={8}>
          {loading ? (
            <p>loading</p>
          ) : (
            lesson && (
              <>
                <VideoFrame lesson={lesson} />
                <LessonDescription lesson={lesson} />
              </>
            )
          )}
        </Grid>
        <Grid item md={4}>
          <CardLessonsList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Lesson;
