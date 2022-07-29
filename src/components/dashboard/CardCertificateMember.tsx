import {
  Box,
  Button,
  Card,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { ICertificate } from "../../interfaces/course-model";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import moment from "moment";

export const SkeletonCardCertificateMember = () => {
  return (
    <>
      <Card sx={{ display: { xs: "none", md: "block" } }}>
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            height: "200px",
            borderRadius: "24px",
            overflow: "hidden",
            marginBottom: "15px",
          }}
        />
        <Skeleton variant="text" sx={{ width: "90%", height: "30px" }} />
        <Skeleton variant="text" sx={{ width: "50%", height: "24px" }} />
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            marginTop: "15px",
            borderRadius: "12px",
            height: "40px",
          }}
        />
      </Card>
      <Card sx={{ padding: "14px", display: { xs: "block", md: "none" } }}>
        <Stack direction={"row"} gap={2} alignItems={"flex-start"}>
          <Skeleton
            variant="rectangular"
            width="30%"
            height="70px"
            sx={{ borderRadius: "5px" }}
          />
          <Box sx={{ width: "70%" }}>
            <Skeleton variant="text" width="80%" height="30px" />
            <Skeleton variant="text" width="40%" height="20px" />
          </Box>
        </Stack>
      </Card>
    </>
  );
};

const CardCertificateMember: React.FC<{ certificate: ICertificate }> = ({
  certificate,
}) => {
  const theme = useTheme();
  return (
    <>
      <Card sx={{ display: { xs: "none", md: "block" } }}>
        <Box
          sx={{
            borderRadius: "24px",
            overflow: "hidden",
            marginBottom: "15px",
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={`${import.meta.env.VITE_STORAGE_URL}/${certificate.thumbnail}`}
          />
        </Box>
        <Typography variant="h5">{certificate.title}</Typography>
        <Typography>
          {moment(certificate.graduation_date).format("DD-MM-YYYY")}
        </Typography>
        <Link to={`/certificate/${certificate.certificate_id}`}>
          <Button
            startIcon={<VisibilityIcon />}
            color="secondary"
            sx={{ width: "100%", marginTop: "15px" }}
          >
            Lihat Sertifikat
          </Button>
        </Link>
      </Card>
      <Link to={`/certificate/${certificate.certificate_id}`}>
        <Card
          sx={{
            "&:hover": {
              boxShadow: `0px 0px 1px 1px ${theme.palette.secondary.main}`,
            },
            display: { xs: "block", md: "none" },
          }}
        >
          <Stack direction="row" gap={2} alignItems="flex-start">
            <Box sx={{ width: "30%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  overflow: "hidden",
                  borderRadius: "5px",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src={`${import.meta.env.VITE_STORAGE_URL}/${
                    certificate.thumbnail
                  }`}
                />
              </Box>
            </Box>
            <Box sx={{ width: "70%" }}>
              <Typography variant="body2" fontWeight={"medium"}>
                {certificate.title}
              </Typography>
              <Box>
                <Typography variant="caption">
                  {moment(certificate.graduation_date).format("DD-MM-YYYY")}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Card>
      </Link>
    </>
  );
};

export default CardCertificateMember;
