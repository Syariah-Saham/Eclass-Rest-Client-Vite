import { Alert, Box, Button, Card, Collapse, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import InputLabel from "../../../components/InputLabel";
import LoadingIndicator from "../../../components/LoadingIndicator";
import {
  IUpdateNameForm,
  IUpdatePasswordForm,
  IUpdatePhotoForm,
} from "../../../interfaces/forms/profile";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { updatePassword, updatePhoto } from "../../../services/user";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  updateNameAction,
  updatePhotoAction,
} from "../../../redux/actions/auth";
import { FilePond } from "react-filepond";
import { openSnackbar } from "../../../redux/actions/snackbar";

const FormUpdateName: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [success, setSuccess] = useState<{ status: boolean; message: string }>({
    status: false,
    message: "",
  });
  const [error, setError] = useState<{ status: boolean; message: string }>({
    status: false,
    message: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUpdateNameForm>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: auth.user?.name,
    },
  });

  const onSubmit = handleSubmit(async (data: IUpdateNameForm) => {
    setLoading(true);
    try {
      await dispatch(updateNameAction(data));
      setSuccess({
        status: true,
        message: "Updated name succcessfully.",
      });
    } catch (error: any) {
      setError({
        status: true,
        message: error?.response?.data?.message,
      });
    } finally {
      setLoading(false);
    }
  });

  return (
    <Card sx={{ marginBottom: "20px" }}>
      <form onSubmit={onSubmit}>
        <Collapse in={error.status}>
          <Alert
            variant="filled"
            severity="error"
            sx={{ marginBottom: "20px" }}
          >
            {error.message}
          </Alert>
        </Collapse>
        <Collapse in={success.status}>
          <Alert
            onClose={() => {
              setSuccess({ ...success, status: false });
            }}
            variant="filled"
            severity="success"
            sx={{ marginBottom: "20px" }}
          >
            {success.message}
          </Alert>
        </Collapse>
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
                placeholder: "Nama",
                onChange: (e) => onChange(e.target.value),
                value: value,
              }}
            />
          )}
        />
        <Button type="submit" disabled={loading}>
          {!loading ? "Update" : <LoadingIndicator />}
        </Button>
      </form>
    </Card>
  );
};

const FormUpdatePassword: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<{ status: boolean; message: string }>({
    status: false,
    message: "",
  });
  const [error, setError] = useState<{ status: boolean; message: string }>({
    status: false,
    message: "",
  });

  const validationSchema = Yup.object({
    password: Yup.string().required("This field is required").min(5).max(30),
    new_password: Yup.string()
      .required("This field is required")
      .min(5)
      .max(30),
    new_password_confirmation: Yup.string()
      .required("This field is required")
      .min(5)
      .max(30)
      .test("new_password_confirmation", "Password tidak sama", function (str) {
        return str === this.parent.new_password;
      }),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUpdatePasswordForm>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      password: "",
      new_password: "",
      new_password_confirmation: "",
    },
  });

  const onSubmit = handleSubmit(async (data: IUpdatePasswordForm) => {
    setLoading(true);
    try {
      const response = await updatePassword(data);
      reset();
      setSuccess({
        status: true,
        message: response.data.message,
      });
    } catch (error: any) {
      console.log(error);
      setError({
        status: true,
        message: error?.response?.data?.message,
      });
    } finally {
      setLoading(false);
    }
  });

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <Collapse in={error.status}>
          <Alert
            onClose={() => setError({ ...success, status: false })}
            variant="filled"
            severity="error"
            sx={{ marginBottom: "20px" }}
          >
            {error.message}
          </Alert>
        </Collapse>
        <Collapse in={success.status}>
          <Alert
            onClose={() => setSuccess({ ...success, status: false })}
            variant="filled"
            severity="success"
            sx={{ marginBottom: "20px" }}
          >
            {success.message}
          </Alert>
        </Collapse>
        <Stack direction="column" alignItems={"center"} gap={2}>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label="Password"
                error={!!errors.password}
                helperText={errors.password?.message}
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
            name="new_password"
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label="Password Baru"
                error={!!errors.new_password}
                helperText={errors.new_password?.message}
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
            name="new_password_confirmation"
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label="Konfirmasi Password Baru"
                error={!!errors.new_password_confirmation}
                helperText={errors.new_password_confirmation?.message}
                inputProps={{
                  type: "password",
                  placeholder: "Password",
                  onChange: (e) => onChange(e.target.value),
                  value: value,
                }}
              />
            )}
          />
        </Stack>
        <Button type="submit" sx={{ marginTop: "20px" }}>
          {!loading ? "Update" : <LoadingIndicator />}
        </Button>
      </form>
    </Card>
  );
};

const FormUpdateProfilePicture: React.FC = () => {
  const [file, setFile] = useState<any[]>([]);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const { handleSubmit, setValue } = useForm<IUpdatePhotoForm>({
    mode: "onChange",
  });

  const onSubmit = handleSubmit(async (data: IUpdatePhotoForm) => {
    setLoading(true);
    try {
      const response = await updatePhoto(data);
      console.log(response.data.path);
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Update profile picture successfully",
        })
      );
      dispatch(updatePhotoAction(response.data.path));
    } catch (error: any) {
      if (error.response.status === 422) {
        dispatch(
          openSnackbar({
            severity: "error",
            message: error?.response?.data?.message,
          })
        );
      } else {
        dispatch(
          openSnackbar({
            severity: "error",
            message: error?.message,
          })
        );
      }
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    setValue("photo", file[0]?.file);
  }, [file]);

  return (
    <Stack direction="column" gap={4} sx={{ width: "400px" }}>
      <form onSubmit={onSubmit}>
        <Box sx={{ width: { xs: "300px", md: "100%" } }}>
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

        <Box
          sx={{ textAlign: "center", marginLeft: { xs: "-100px", md: "0" } }}
        >
          <Button type="submit" disabled={loading} color="primary">
            {loading ? <LoadingIndicator /> : "Upload"}
          </Button>
        </Box>
      </form>
    </Stack>
  );
};

const Profile: React.FC = () => {
  return (
    <Grid container gap={4} flexDirection={{ xs: "column-reverse", md: "row" }}>
      <Grid item xs={12} md={4}>
        <FormUpdateName />
        <FormUpdatePassword />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormUpdateProfilePicture />
      </Grid>
    </Grid>
  );
};

export default Profile;
