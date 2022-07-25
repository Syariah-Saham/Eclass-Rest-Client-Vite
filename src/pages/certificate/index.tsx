import {
  Box,
  Stack,
  Typography as TypographyDefault,
  TypographyProps,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICertificate } from "../../interfaces/course-model";
import { getCertificate } from "../../services/member/courses";
import Logo from "../../assets/logos/logo_saham.png";
import moment from "moment";

const Typography = (props: TypographyProps) => {
  return (
    <TypographyDefault sx={{ color: "#000 !important" }} {...props}>
      {props.children}
    </TypographyDefault>
  );
};

const Certificate: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<ICertificate | null>(null);

  const fetchData = async () => {
    try {
      const response = await getCertificate({ id: id! });
      setData(response.data.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ background: "#fff" }}>
      <Box
        sx={{
          width: "80%",
          margin: "50px auto",
          border: "1px solid lightgrey",
          borderRadius: "5px",
          padding: "80px 60px",
        }}
      >
        <Stack direction="row" alignItems="center">
          <Box sx={{ width: "50%" }}>
            <img src={Logo} style={{ height: "140px" }} />
          </Box>
          <Box>
            <Typography>Certificate ID : {data?.certificate_id}</Typography>
            <Typography>
              Certificate URL :{" "}
              {window.location.host + `/certificate/${data?.certificate_id}`}
            </Typography>
            <Typography>
              Date : {moment(data?.created_at).format("DD/MM/YYYY")}
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction="column"
          sx={{ textAlign: "center", margin: "50px auto" }}
          gap={3}
        >
          <Box>
            <Typography variant="h4">Diberikan kepada</Typography>
            <Typography variant="h1" fontWeight={"bold"}>
              {data?.user.name}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4">Atas kelulusannya pada kelas</Typography>
            <Typography variant="h2" fontWeight={"medium"}>
              {data?.course.title}
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" justifyContent={"space-around"}>
          <Box>
            <Box sx={{ height: "200px" }}></Box>
            <Typography variant="h4">Mentor Pengajar</Typography>
          </Box>
          <Box>
            <Box sx={{ height: "200px" }}></Box>
            <Typography variant="h4">Syariah Saham</Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Certificate;
