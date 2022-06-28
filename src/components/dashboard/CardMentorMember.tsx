import { Box, Typography, Avatar, Card, Stack } from "@mui/material";
import React from "react";

const CardMentorMember: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: "17px" }}>
        Mentor Pengajar
      </Typography>
      <Card>
        <Stack direction="row" sx={{ padding: "25px" }} spacing={4}>
          <Box
            sx={{
              width: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="User 1"
              src="https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?t=st=1656161411~exp=1656162011~hmac=aebaab7283e48b7380c3ec69824743876246b86f38e91bcef2e755fcc91f2e8a&w=826"
              sx={{ height: "150px", width: "150px" }}
            />
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="bold">
              Mang Amsi
            </Typography>
            <Typography fontWeight="medium">Founder Syariah Saham</Typography>
            <Typography sx={{ marginTop: "12px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, eum
              illo quis pariatur possimus soluta dolores tempore totam, officia
              eveniet rerum animi repellendus aliquam mollitia!
            </Typography>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default CardMentorMember;
