import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalEditLesson from "../../../components/modals/ModalEditLesson";
import { ILesson } from "../../../interfaces/lesson-model";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../redux/hooks";
import { getLessonById } from "../../../services/lessons";
import CardLessonsList from "./_lesson/CardLessonsList";
import LessonDescription, {
  LessonDescriptionSkeleton,
} from "./_lesson/LessonDescription";
import Navigation from "./_lesson/Navigation";
import VideoFrame, { VideoFrameSkeleton } from "./_lesson/VideoFrame";

const Lesson: React.FC = () => {
  const { lessonId } = useParams();
  const dispatch = useAppDispatch();
  const [lesson, setLesson] = useState<ILesson | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalEdit, setModalEdit] = useState({
    show: false,
    onClose: () => setModalEdit({ ...modalEdit, show: false }),
  });

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
  }, [lessonId, modalEdit.show]);

  const updateDescription = (description: string) => {
    if (lesson) {
      setLesson({ ...lesson, description: description });
    }
  };

  return (
    <Box>
      <Navigation
        openModalEdit={() => setModalEdit({ ...modalEdit, show: true })}
      />
      <Grid container spacing={5}>
        <Grid item md={8}>
          {loading ? (
            <>
              <VideoFrameSkeleton />
              <LessonDescriptionSkeleton />
            </>
          ) : (
            lesson && (
              <>
                <VideoFrame lesson={lesson} />
                <LessonDescription
                  lesson={lesson}
                  updateDescription={updateDescription}
                />
              </>
            )
          )}
        </Grid>
        <Grid item md={4}>
          <CardLessonsList />
        </Grid>
      </Grid>

      {lesson && (
        <ModalEditLesson
          show={modalEdit.show}
          onClose={modalEdit.onClose}
          lesson={lesson}
        />
      )}
    </Box>
  );
};

export default Lesson;
