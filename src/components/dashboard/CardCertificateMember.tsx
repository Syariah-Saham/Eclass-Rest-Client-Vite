import { Box, Button, Card, Skeleton, Typography } from "@mui/material";
import React from "react";
import { ICertificate } from "../../interfaces/course-model";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import moment from "moment";

export const SkeletonCardCertificateMember = () => {
  return (
    <Card>
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
  );
};

const CardCertificateMember: React.FC<{ certificate: ICertificate }> = ({
  certificate,
}) => {
  return (
    <Card>
      <Box
        sx={{ borderRadius: "24px", overflow: "hidden", marginBottom: "15px" }}
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
  );
};

export default CardCertificateMember;
