import {
  Avatar,
  Box,
  Button,
  Card,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardMentors: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%" }}>
      <Card sx={{ height: "450px" }}>
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Daftar Mentor
        </Typography>
        <Stack direction="column" gap={2}>
          <Stack
            direction="row"
            alignItems={"center"}
            gap={3}
            sx={{ margin: "20px 0px" }}
          >
            <Box>
              <Avatar
                alt="User 1"
                src="https://i.pinimg.com/564x/f6/c3/79/f6c379ccfb9130cfd36c63722d5251be.jpg"
                sx={{ height: "50px", width: "50px" }}
              />
            </Box>
            <Box>
              <Typography variant="h5">Mentor 1</Typography>
              <Typography variant="body1" color={theme.palette.text.disabled}>
                mentor1@mail.com
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction="row"
            alignItems={"center"}
            gap={3}
            sx={{ margin: "20px 0px" }}
          >
            <Box>
              <Avatar
                alt="User 1"
                src="https://i.pinimg.com/564x/f6/c3/79/f6c379ccfb9130cfd36c63722d5251be.jpg"
                sx={{ height: "50px", width: "50px" }}
              />
            </Box>
            <Box>
              <Typography variant="h5">Mentor 1</Typography>
              <Typography variant="body1" color={theme.palette.text.disabled}>
                mentor1@mail.com
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction="row"
            alignItems={"center"}
            gap={3}
            sx={{ margin: "20px 0px" }}
          >
            <Box>
              <Avatar
                alt="User 1"
                src="https://i.pinimg.com/564x/f6/c3/79/f6c379ccfb9130cfd36c63722d5251be.jpg"
                sx={{ height: "50px", width: "50px" }}
              />
            </Box>
            <Box>
              <Typography variant="h5">Mentor 1</Typography>
              <Typography variant="body1" color={theme.palette.text.disabled}>
                mentor1@mail.com
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Link to="/admin/mentors">
          <Button sx={{ width: "100%", marginTop: "20px" }} color="primary">
            Lihat Semua
          </Button>
        </Link>
      </Card>
    </Box>
  );
};

export default CardMentors;
