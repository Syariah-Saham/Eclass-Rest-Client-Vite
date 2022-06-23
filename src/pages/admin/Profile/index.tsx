import {
  Alert,
  Box,
  Button,
  Card,
  Collapse,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import InputLabel from "../../../components/InputLabel";
import LoadingIndicator from "../../../components/LoadingIndicator";
import {
  IUpdateNameForm,
  IUpdatePasswordForm,
} from "../../../interfaces/forms/profile";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { updatePassword } from "../../../services/user";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { updateNameAction } from "../../../redux/actions/auth";

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

const Profile: React.FC = () => {
  return (
    <Box sx={{ width: "40%" }}>
      <FormUpdateName />
      <FormUpdatePassword />
    </Box>
  );
};

export default Profile;
