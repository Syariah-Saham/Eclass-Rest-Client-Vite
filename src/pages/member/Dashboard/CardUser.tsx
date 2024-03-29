import React, { useEffect, useState } from "react";
import { Card, Stack, Avatar, Box, Typography } from "@mui/material";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useAppSelector } from "../../../redux/hooks";

const CardUser: React.FC = () => {
  const auth = useAppSelector((state) => state.auth);
  const [totalCertificates, setTotalCertificates] = useState(0);

  const courses = useAppSelector((state) => state.courses.owned_list);

  useEffect(() => {
    const result = courses.filter((item) => !!item.certificate_id)?.length;
    setTotalCertificates(result);
  }, [courses]);

  return (
    <Card sx={{ width: "85%" }}>
      <Stack direction="row" alignItems="center" spacing={3}>
        <Box sx={{ margin: "15px 30px" }}>
          <Avatar
            alt="User 1"
            src={`${import.meta.env.VITE_STORAGE_URL}/${
              auth.user?.profile_photo
            }`}
            sx={{
              height: "100px",
              width: "100px",
            }}
          />
        </Box>
        <Stack direction="column" justifyContent={"space-between"} spacing={4}>
          <Box>
            <Typography variant="h4">{auth.user?.name}</Typography>
            <Typography variant="h6">{auth.user?.email}</Typography>
          </Box>
          <Stack direction="row" spacing={5}>
            <Stack direction="row" spacing={1} alignItems="center">
              <MenuBookRoundedIcon />
              <Typography fontWeight={"bold"}>{courses.length}</Typography>
              <Typography>Kelas</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <WorkspacePremiumIcon />
              <Typography fontWeight={"bold"}>{totalCertificates}</Typography>
              <Typography>Sertifikat</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CardUser;
