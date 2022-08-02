import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IRegisterForm } from "../../../interfaces/auth";
import AuthLayout from "../../../layouts/AuthLayout";
import { authRegister } from "../../../services/auth";
import LogoEclass from "../../../assets/logos/logo_eclass.png";
import InputLabel from "../../../components/InputLabel";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidation } from "../../../validations/auth/register-form";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";

const Register: React.FC = () => {
  const [error, setError] = useState<{ status: boolean; message: string }>({
    status: false,
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRegisterForm>({
    mode: "onBlur",
    resolver: yupResolver(registerValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      await authRegister(data);
      navigate("/login");
    } catch (error: any) {
      console.error(error);
      if (error.response?.status === 422) {
        setError({
          status: true,
          message: "Cek kembali data yang dimasukkan.",
        });
      }
    } finally {
      setLoading(false);
    }
  });

  return (
    <AuthLayout>
      <Box sx={{ width: { xs: "100%", md: "60%" } }}>
        <Box sx={{ width: "150px", margin: "20px auto" }}>
          <img style={{ width: "100%" }} src={LogoEclass} alt="logo eclass" />
        </Box>
        <Box>
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
                    helperText={errors?.password_confirmation?.message}
                    inputProps={{
                      type: "password",
                      placeholder: "Konfirmasi Password",
                      onChange: (e) => onChange(e.target.value),
                      value: value,
                    }}
                  />
                )}
              />
              <Stack direction="row">
                <Button disabled={loading} type="submit">
                  {!loading ? "Daftar" : <LoadingIndicator />}
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Box>
      {/* <div>
        <h1>Register Page</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label>Nama</label>
            <input type="text" {...register("name")} />
            <span>{errors?.name?.message}</span>
          </div>
          <div>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <span>{errors?.email?.message}</span>
          </div>
          <div>
            <label>Password</label>
            <input type="password" {...register("password")} />
            <span>{errors?.password?.message}</span>
          </div>
          <div>
            <label>Konfirmasi Password</label>
            <input type="password" {...register("password_confirmation")} />
            <span>{errors?.password_confirmation?.message}</span>
          </div>
          <button disabled={loading} type="submit">
            Daftar
          </button>
        </form>
      </div> */}
    </AuthLayout>
  );
};

export default Register;
