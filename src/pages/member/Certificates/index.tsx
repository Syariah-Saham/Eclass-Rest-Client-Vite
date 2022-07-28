import { Box, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardCertificateMember, {
  SkeletonCardCertificateMember,
} from "../../../components/dashboard/CardCertificateMember";
import DataEmptySection from "../../../components/dashboard/DataEmptySection";
import { ICertificate } from "../../../interfaces/course-model";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { getCertificates } from "../../../services/member/courses";
import MyCoursesList from "../MyCourses/_List/MyCoursesList";

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
        <Typography variant="h3" sx={{ display: { xs: "none", md: "block" } }}>
          Sertifikat
        </Typography>
        <Typography variant="h5" sx={{ display: { xs: "block", md: "none" } }}>
          Sertifikat
        </Typography>
        <Grid container spacing={5} sx={{ marginTop: "0px" }}>
          {loading &&
            [1, 2, 3, 4].map((item) => (
              <Grid key={item} item md={3}>
                <SkeletonCardCertificateMember />
              </Grid>
            ))}

          {!loading && !certificates.length && <DataEmptySection />}
        </Grid>
        {!loading && (
          <Grid container spacing={5} sx={{ marginTop: "0px" }}>
            {certificates.map((certificate) => (
              <Grid key={certificate.id} item md={3}>
                <CardCertificateMember certificate={certificate} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <Box sx={{ marginTop: "60px" }}>
        <MyCoursesList title="Lanjut Belajar" />
      </Box>
    </Box>
  );
};

export default Certificates;
