import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IAuthLoginResponse, ILoginForm } from "../../../interfaces/auth";
import AuthLayout from "../../../layouts/AuthLayout";
import { login } from "../../../redux/actions/auth";
import { useAppDispatch } from "../../../redux/hooks";
import LogoEclass from "../../../assets/logos/logo_eclass.png";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import InputLabel from "../../../components/InputLabel";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../../../validations/auth/login-form";

const Login: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ status: boolean; message: string }>({
    status: false,
    message: "",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: "onBlur",
    resolver: yupResolver(loginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const response = (await dispatch(login(data))) as IAuthLoginResponse;
      if (response.user) {
        if (response.user?.role === "admin") {
          navigate("/admin/dashboard");
        } else if (response.user.role === "member") {
          navigate("/member/dashboard");
        }
      } else {
        setError({
          status: true,
          message: "Email atau password salah",
        });
      }
    } catch (error: any) {
      if (error.response.status === 422) {
        setError({
          status: true,
          message: "Email atau password salah",
        });
      }
    } finally {
      setLoading(false);
    }
  });

  return (
    <AuthLayout>
      <Box sx={{ width: "60%" }}>
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
                name="email"
                render={({ field: { onChange, value } }) => (
                  <InputLabel
                    label="Email"
                    error={!!errors?.email}
                    helperText={errors?.email?.message}
                    inputProps={{
                      type: "email",
                      autoFocus: true,
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
              <Stack direction={"row"}>
                <Button disabled={loading} type="submit">
                  {!loading ? "Login" : <LoadingIndicator />}
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default Login;
