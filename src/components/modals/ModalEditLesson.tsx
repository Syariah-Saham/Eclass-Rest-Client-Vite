import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IUpdateLessonForm } from "../../interfaces/forms/admin/lessons";
import { ILesson } from "../../interfaces/lesson-model";
import { openSnackbar } from "../../redux/actions/snackbar";
import { useAppDispatch } from "../../redux/hooks";
import { updateLessonValidation } from "../../validations/admin/lesson-form";
import * as ReactDOM from "react-dom";
import { Button, Card, Fade, Modal, Stack } from "@mui/material";
import LoadingIndicator from "../LoadingIndicator";
import InputLabel from "../InputLabel";
import { updateInfoLesson } from "../../services/lessons";

interface IProps {
  show: boolean;
  onClose: () => void;
  lesson: ILesson;
}
const ModalEditLesson: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUpdateLessonForm>({
    mode: "onChange",
    resolver: yupResolver(updateLessonValidation),
    defaultValues: {
      title: props.lesson.title,
      video_id: `https://www.youtube.com/watch?v=${props.lesson.video_id}`,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const payload = {
        id: props.lesson.id,
        title: data.title,
        video_id: data.video_id?.replace(
          /^https:\/\/(youtu.be\/|www.youtube.com\/watch\?v=)+/,
          ""
        ),
      };
      await updateInfoLesson(payload);
      props.onClose();
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Updated lesson successfully",
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
      setLoading(false);
    }
  });

  return ReactDOM.createPortal(
    <Modal open={props.show}>
      <Fade in={props.show}>
        <Card sx={{ outline: "none", padding: "30px" }}>
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
              <Stack
                direction="row"
                justifyContent={"center"}
                sx={{ marginTop: "30px" }}
                gap={5}
              >
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={props.onClose}
                  type="button"
                >
                  Batal
                </Button>
                <Button color="secondary" type="submit" disabled={loading}>
                  {loading ? <LoadingIndicator /> : "Submit"}
                </Button>
              </Stack>
            </Stack>
          </form>
        </Card>
      </Fade>
    </Modal>,
    document.getElementById("modal-root") as Element
  );
};

export default ModalEditLesson;
