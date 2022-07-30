import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Box,
  Button,
  Card,
  Collapse,
  FormHelperText,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputLabel from "../../../components/InputLabel";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { ICreateMentorForm } from "../../../interfaces/forms/admin/mentors";
import { createNewMentor } from "../../../services/mentors";
import { createMentorValidation } from "../../../validations/admin/mentor-form";
import { FilePond } from "react-filepond";
import { useAppDispatch } from "../../../redux/hooks";
import { openSnackbar } from "../../../redux/actions/snackbar";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<any[]>([]);
  const [error, setError] = useState<{ status: boolean; message: string }>({
    status: false,
    message: "",
  });

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ICreateMentorForm>({
    mode: "onBlur",
    resolver: yupResolver(createMentorValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      occupation: "",
      short_profile: "",
    },
  });

  useEffect(() => {
    setValue("photo", file[0]?.file);
  }, [file]);

  const onSubmit = handleSubmit(async (data: ICreateMentorForm) => {
    setLoading(true);
    try {
      const response = await createNewMentor(data);
      if (response.status === 201) {
        dispatch(
          openSnackbar({
            severity: "success",
            message: "Create mentor successfully",
          })
        );
        navigate("/admin/mentors");
      }
    } catch (error: any) {
      console.error(error);
      setError({
        status: true,
        message: error?.response?.data?.message,
      });
    } finally {
      setLoading(false);
    }
  });

  return (
    <Box>
      <Link to="/admin/mentors">
        <Button variant="outlined">Kembali</Button>
      </Link>
      <form onSubmit={onSubmit}>
        <Grid container gap={5}>
          <Grid item md={5}>
            <Card sx={{ marginTop: "20px" }}>
              <Collapse in={error.status}>
                <Alert
                  variant="filled"
                  severity="error"
                  sx={{ marginBottom: "20px" }}
                >
                  {error.message}
                </Alert>
              </Collapse>
              <Stack direction="column" alignItems="center" gap={2}>
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { onChange, value } }) => (
                    <InputLabel
                      label="Nama"
                      error={!!errors?.name}
                      helperText={errors?.name?.message}
                      inputProps={{
                        type: "text",
                        autoFocus: true,
                        placeholder: "Nama",
                        onChange: (e) => onChange(e.target.value),
                        value: value,
                      }}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, value } }) => (
                    <InputLabel
                      label="Email"
                      error={!!errors?.email}
                      helperText={errors?.email?.message}
                      inputProps={{
                        type: "email",
                        placeholder: "Email",
                        onChange: (e) => onChange(e.target.value),
                        value: value,
                      }}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, value } }) => (
                    <InputLabel
                      label="Password"
                      error={!!errors?.password}
                      helperText={errors?.password?.message}
                      inputProps={{
                        type: "password",
                        placeholder: "Password",
                        onChange: (e) => onChange(e.target.value),
                        value: value,
                      }}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="password_confirmation"
                  render={({ field: { onChange, value } }) => (
                    <InputLabel
                      label="Konfirmasi Password"
                      error={!!errors?.password_confirmation}
                      helperText={errors.password_confirmation?.message}
                      inputProps={{
                        type: "password",
                        placeholder: "Konfirmasi Password",
                        onChange: (e) => onChange(e.target.value),
                        value: value,
                      }}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="occupation"
                  render={({ field: { onChange, value } }) => (
                    <InputLabel
                      label="Pekerjaan"
                      error={!!errors?.occupation}
                      helperText={errors.occupation?.message}
                      inputProps={{
                        type: "text",
                        placeholder: "Pekerjaan",
                        onChange: (e) => onChange(e.target.value),
                        value: value,
                      }}
                    />
                  )}
                />
                <Box sx={{ width: "100%" }}>
                  <Controller
                    control={control}
                    name="short_profile"
                    render={({ field: { onChange, value } }) => (
                      <InputLabel
                        label="Profil singkat"
                        error={!!errors?.short_profile}
                        helperText={errors.short_profile?.message}
                        inputProps={{
                          type: "password",
                          multiline: true,
                          placeholder: "Profil singkat",
                          onChange: (e) => onChange(e.target.value),
                          value: value,
                        }}
                      />
                    )}
                  />
                  <Typography variant="caption">
                    {watch("short_profile")?.length} / 250
                  </Typography>
                </Box>
                <Stack direction="row" justifyContent={"center"}>
                  <Button disabled={loading} type="submit">
                    {!loading ? "Submit" : <LoadingIndicator />}
                  </Button>
                </Stack>
              </Stack>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Box>
              <FilePond
                files={file}
                onupdatefiles={(val) => setFile(val)}
                allowMultiple={false}
                name="photo"
                stylePanelLayout={"compact circle"}
                imagePreviewHeight={400}
                labelIdle={`<div><p>Drag & Drop your files or </p> <span class="filepond--label-action">Browse</span></div>`}
              />
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Create;
