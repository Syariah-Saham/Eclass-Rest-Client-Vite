import { Box, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardCertificateMember from "../../../components/dashboard/CardCertificateMember";
import CardCourseMember from "../../../components/dashboard/CardCourseMember";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { ICertificate } from "../../../interfaces/course-model";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { getCertificates } from "../../../services/member/courses";

const Certificates: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [certificates, setCertificates] = useState<ICertificate[]>([]);

  const fetchCertificates = async () => {
    try {
      const response = await getCertificates();
      setCertificates(response.data.certificates);
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.response,
        })
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <Box>
      <Box>
        <Typography variant="h3">Sertifikat</Typography>
        {loading && <LoadingIndicator />}
        {!loading && (
          <Grid container spacing={5} sx={{ marginTop: "0px" }}>
            {certificates.map((certificate) => (
              <Grid item md={3}>
                <CardCertificateMember certificate={certificate} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <Box sx={{ marginTop: "60px" }}>
        {/* <Typography variant="h3">Lanjut Belajar</Typography> */}
        <Grid container spacing={5} sx={{ marginTop: "0px" }}>
          {/* <Grid item md={3}>
            <CardCourseMember />
          </Grid>
          <Grid item md={3}>
            <CardCourseMember />
          </Grid>
          <Grid item md={3}>
            <CardCourseMember />
          </Grid>
          <Grid item md={3}>
            <CardCourseMember />
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
};

export default Certificates;
