import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import LoadingIndicator from "../../../components/LoadingIndicator";
import AuthLayout from "../../../layouts/AuthLayout";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../redux/hooks";
import { sendVerifyEmail } from "../../../services/auth";

const VerifyEmail: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await sendVerifyEmail();
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Email verifikasi berhasil dikirim",
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
  };

  return (
    <AuthLayout>
      <Stack direction="column" gap={3}>
        <Typography variant="h3">Verifikasi Email</Typography>
        <Typography>
          Verifikasi email kamu terlebih dahulu untuk menggunakan layanan kami.
        </Typography>
        <Box>
          <Button onClick={handleClick} disabled={loading}>
            {loading ? <LoadingIndicator /> : "Kirim Ulang"}
          </Button>
        </Box>
      </Stack>
    </AuthLayout>
  );
};

export default VerifyEmail;
