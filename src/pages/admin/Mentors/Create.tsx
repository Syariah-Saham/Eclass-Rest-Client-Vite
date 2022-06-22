import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Box, Button, Card, Collapse, Stack } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputLabel from "../../../components/InputLabel";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { ICreateMentorForm } from "../../../interfaces/forms/admin/mentors";
import { createNewMentor } from "../../../services/mentors";
import { createMentorValidation } from "../../../validations/admin/mentor-form";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ status: boolean; message: string }>({
    status: false,
    message: "",
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICreateMentorForm>({
    mode: "onBlur",
    resolver: yupResolver(createMentorValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const onSubmit = handleSubmit(async (data: ICreateMentorForm) => {
    setLoading(true);
    try {
      const response = await createNewMentor(data);
      if (response.status === 201) {
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
      <Card sx={{ width: "40%", marginTop: "20px" }}>
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
            <Stack direction="row" justifyContent={"center"}>
              <Button disabled={loading} type="submit">
                {!loading ? "Submit" : <LoadingIndicator />}
              </Button>
            </Stack>
          </Stack>
        </form>
      </Card>
    </Box>
  );
};

export default Create;
