import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FilePond } from "react-filepond";
import InputLabel from "../../../components/InputLabel";
import SelectLabel from "../../../components/SelectLabel";
import MDEditor from "@uiw/react-md-editor";
import { Link, useNavigate } from "react-router-dom";
import { getMentors } from "../../../services/mentors";
import { Controller, useForm } from "react-hook-form";
import { ICreateCourseForm } from "../../../interfaces/forms/admin/courses";
import { yupResolver } from "@hookform/resolvers/yup";
import { createCourseValidation } from "../../../validations/admin/course-form";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { createNewCourse } from "../../../services/courses";

const levelOptions = [
  {
    label: "Pemula",
    value: "beginner",
  },
  {
    label: "Menengah",
    value: "intermediete",
  },
  {
    label: "Professional",
    value: "expert",
  },
];

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<any[]>([]);
  const theme = useTheme();
  const [mentorOptions, setMentorOptions] = useState<
    { label: string; value: number }[]
  >([]);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [error, setError] = useState<{ status: boolean; message: string }>({
    status: false,
    message: "",
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

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICreateCourseForm>({
    mode: "onBlur",
    resolver: yupResolver(createCourseValidation),
    defaultValues: {
      title: "",
      price: 0,
      description: "",
    },
  });

  const onSubmit = handleSubmit(async (data: ICreateCourseForm) => {
    setLoadingSubmit(true);
    try {
      const fd = new FormData();
      const payload = { ...data, thumbnail: file[0]?.file };
      await createNewCourse(payload);
      navigate("/admin/courses");
    } catch (error: any) {
      console.log(error);
      setError({
        status: true,
        message: error?.response?.data?.message,
      });
    } finally {
      setLoadingSubmit(false);
    }
  });

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Stack
          direction="row"
          gap={3}
          alignItems="center"
          sx={{ marginBottom: "20px" }}
        >
          <Button type="submit" disabled={loadingSubmit}>
            {!loadingSubmit ? "Simpan" : <LoadingIndicator />}
          </Button>
          <Link to="/admin/courses">
            <Button variant="outlined">Batal</Button>
          </Link>
        </Stack>
        <Grid container gap={3} wrap="wrap">
          <Grid item md={5.5}>
            <FilePond
              files={file}
              onupdatefiles={(val) => setFile(val)}
              allowMultiple={false}
              name="files"
              imagePreviewHeight={400}
              labelIdle={`<div><p>Drag & Drop your files or </p> <span class="filepond--label-action">Browse</span></div>`}
            />
          </Grid>
          <Grid item md={5.5}>
            <div
              style={{
                background: theme.palette.background.paper,
                padding: "30px",
                borderRadius: "6px",
              }}
            >
              <form>
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
                </Stack>
              </form>
            </div>
          </Grid>
          <Grid item md={11}>
            <Card>
              <Typography variant="h5">Deskripsi</Typography>
              <Controller
                control={control}
                name="description"
                render={({ field: { onChange, value } }) => (
                  <MDEditor
                    height={600}
                    value={value}
                    onChange={(val) => onChange(val)}
                  />
                )}
              />
              <Typography
                sx={{
                  color: theme.palette.error.main + " !important",
                  marginTop: "10px",
                }}
              >
                {errors?.description?.message}
              </Typography>
            </Card>
            <Stack
              direction="row"
              justifyContent={"flex-end"}
              sx={{ marginTop: "20px" }}
              gap={3}
            >
              <Button disabled={loadingSubmit} type="submit">
                {!loadingSubmit ? "Simpan" : <LoadingIndicator />}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Create;
