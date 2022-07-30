import {
  Box,
  Button,
  Card,
  Fade,
  FormHelperText,
  Modal,
  Stack,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import InputLabel from "../../../components/InputLabel";
import MDEditor from "@uiw/react-md-editor";
import { Controller, useForm } from "react-hook-form";
import { ICreateLessonForm } from "../../../interfaces/forms/admin/lessons";
import { yupResolver } from "@hookform/resolvers/yup";
import { createLessonValidation } from "../../../validations/admin/lesson-form";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { useAppDispatch } from "../../../redux/hooks";
import { createNewLesson } from "../../../services/lessons";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { ILesson } from "../../../interfaces/lesson-model";
import { useParams } from "react-router-dom";

interface IModalAddLesson {
  show: boolean;
  onClose: () => void;
  appendNewLesson: (lesson: ILesson) => void;
}

const ModalAddLesson: React.FC<IModalAddLesson> = (props) => {
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const { id } = useParams();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ICreateLessonForm>({
    mode: "onChange",
    resolver: yupResolver(createLessonValidation),
    defaultValues: {
      title: "",
      video_id: "",
      description: "",
    },
  });

  const onSubmit = handleSubmit(async (data: ICreateLessonForm) => {
    setLoadingSubmit(true);
    try {
      const payload = {
        course_id: id!,
        title: data.title,
        video_id: data.video_id?.replace(
          /^https:\/\/(youtu.be\/|www.youtube.com\/watch\?v=)+/,
          ""
        ),
        description: data.description,
      };
      const response = await createNewLesson(payload);
      const lesson = response.data.lesson;
      props.appendNewLesson(lesson);
      props.onClose();
      reset();
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Created lesson successfully",
        })
      );
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    } finally {
      setLoadingSubmit(false);
    }
  });

  return (
    <Modal open={props.show} onClose={props.onClose}>
      <Fade in={props.show}>
        <Card sx={{ width: "50%" }}>
          <form onSubmit={onSubmit}>
            <Stack direction={"column"} gap={2}>
              <Controller
                control={control}
                name="title"
                render={({ field: { onChange, value } }) => (
                  <InputLabel
                    label="Judul"
                    error={!!errors?.title}
                    helperText={errors?.title?.message}
                    inputProps={{
                      type: "text",
                      placeholder: "Judul",
                      onChange: (e) => onChange(e.target.value),
                      value: value,
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="video_id"
                render={({ field: { onChange, value } }) => (
                  <InputLabel
                    label="URL Video"
                    error={!!errors?.video_id}
                    helperText={errors?.video_id?.message}
                    inputProps={{
                      type: "text",
                      placeholder: "URL Video",
                      onChange: (e) => onChange(e.target.value),
                      value: value,
                    }}
                  />
                )}
              />
              <Box>
                <Controller
                  control={control}
                  name="description"
                  render={({ field: { onChange, value } }) => (
                    <MDEditor
                      height={500}
                      value={value}
                      onChange={(val) => onChange(val)}
                    />
                  )}
                />
                <FormHelperText
                  sx={{ marginBottom: "20px", color: theme.palette.error.main }}
                >
                  {errors?.description?.message}
                </FormHelperText>
              </Box>
              <Stack
                direction="row"
                justifyContent={"center"}
                gap={3}
                sx={{ marginTop: "20px" }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={props.onClose}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  color="secondary"
                  disabled={loadingSubmit}
                >
                  {loadingSubmit ? <LoadingIndicator /> : "Kirim"}
                </Button>
              </Stack>
            </Stack>
          </form>
        </Card>
      </Fade>
    </Modal>
  );
};

export default ModalAddLesson;
