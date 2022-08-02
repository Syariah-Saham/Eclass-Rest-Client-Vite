import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../../../layouts/AuthLayout";
import { useAppDispatch } from "../../../redux/hooks";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { processVerificationEmail } from "../../../services/auth";
import { updateEmailVerifiedAt } from "../../../redux/actions/auth";

const VerifyEmailProcess: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const verifyEmail = async () => {
    try {
      const url = location.search.replace("?email_verify_url=", "");
      const path = url.replace(import.meta.env.VITE_API_URL, "");
      const response = await processVerificationEmail({ path });
      if (response.data.user) {
        dispatch(
          updateEmailVerifiedAt({ time: response.data.user.email_verified_at! })
        );
      }
      navigate(`/login`);
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    }
  };

  useEffect(() => {
    verifyEmail();
  }, []);

  return (
    <AuthLayout>
      <Stack direction="column" gap={3}>
        <Typography variant="h3">Mohon tunggu</Typography>
        <Typography>Sedang memverifikasi email...</Typography>
      </Stack>
    </AuthLayout>
  );
};

export default VerifyEmailProcess;
