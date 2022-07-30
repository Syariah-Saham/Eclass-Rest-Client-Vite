import { Button, Card, Fade, Modal, Stack } from "@mui/material";
import * as ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ICourse } from "../../interfaces/course-model";
import { IUpdateCourseForm } from "../../interfaces/forms/admin/courses";
import { useAppDispatch } from "../../redux/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateCourseValidation } from "../../validations/admin/course-form";
import LoadingIndicator from "../LoadingIndicator";
import { openSnackbar } from "../../redux/actions/snackbar";
import { getMentors } from "../../services/mentors";
import InputLabel from "../InputLabel";
import SelectLabel from "../SelectLabel";
import { levelOptions } from "../../constant/level-options";
import { updateInfoCourse } from "../../services/courses";

interface IProps {
  show: boolean;
  onClose: () => void;
  course: ICourse;
}
const ModalEditCourse: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [mentorOptions, setMentorOptions] = useState<
    { label: string; value: number }[]
  >([]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUpdateCourseForm>({
    mode: "onChange",
    resolver: yupResolver(updateCourseValidation),
    defaultValues: {
      title: props.course.title,
      price: props.course.price,
      actual_price: props.course.actual_price,
      short_description: props.course.short_description,
      user_id: props.course.user_id,
      category: props.course.category,
    },
  });

  const getListMentors = async () => {
    try {
      const response = await getMentors();
      setMentorOptions(
        response.data?.mentors?.map((mentor) => {
          return {
            label: mentor.name,
            value: mentor.id,
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListMentors();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      await updateInfoCourse({ ...data, id: props.course.id });
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Update course successfully",
        })
      );
      props.onClose();
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
        <Card sx={{ outline: "none", padding: "30px", width: "40%" }}>
          <form onSubmit={onSubmit}>
            <Stack direction="column" gap={2}>
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
                name="user_id"
                render={({ field: { onChange, value } }) => (
                  <SelectLabel
                    label="Mentor"
                    error={!!errors?.user_id}
                    helperText={errors?.user_id?.message}
                    selectProps={{
                      placeholder: "Pilih Mentor",
                      options: mentorOptions,
                      onChange: (item) =>
                        onChange((item as { value: number }).value),
                      value: mentorOptions.find(
                        (option) => option.value === value
                      ),
                      error: !!errors?.user_id,
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="category"
                render={({ field: { onChange, value } }) => (
                  <SelectLabel
                    label="Level"
                    error={!!errors?.category}
                    helperText={errors?.category?.message}
                    selectProps={{
                      placeholder: "Pilih Level",
                      options: levelOptions,
                      onChange: (item) =>
                        onChange((item as { value: string })?.value),
                      value: levelOptions.find(
                        (option) => option.value === value
                      ),
                      error: !!errors?.category,
                    }}
                  />
                )}
              />
              <Stack direction="row" gap={3}>
                <Controller
                  control={control}
                  name="price"
                  render={({ field: { onChange, value } }) => (
                    <InputLabel
                      label="Harga"
                      error={!!errors?.price}
                      helperText={errors?.price?.message}
                      inputProps={{
                        type: "text",
                        placeholder: "Harga",
                        onChange: (e) => onChange(e.target.value),
                        value: value,
                      }}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="actual_price"
                  render={({ field: { onChange, value } }) => (
                    <InputLabel
                      label="Harga Sebenarnya"
                      error={!!errors?.actual_price}
                      helperText={errors?.actual_price?.message}
                      inputProps={{
                        type: "text",
                        placeholder: "Harga Sebenarnya",
                        onChange: (e) => onChange(e.target.value),
                        value: value,
                      }}
                    />
                  )}
                />
              </Stack>

              <Controller
                control={control}
                name="short_description"
                render={({ field: { onChange, value } }) => (
                  <InputLabel
                    label="Deskripsi Singkat"
                    error={!!errors?.title}
                    helperText={errors?.title?.message}
                    inputProps={{
                      type: "text",
                      placeholder: "Deskripsi Singkat",
                      onChange: (e) => onChange(e.target.value),
                      value: value,
                      multiline: true,
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

export default ModalEditCourse;
