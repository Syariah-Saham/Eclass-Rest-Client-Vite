import { Avatar, Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { IUser } from "../../../../interfaces/user-model";
import moment from "moment";

const CardInfoMember: React.FC<{ member?: IUser }> = ({ member }) => {
  return (
    <Card sx={{ padding: { xs: "5px", md: "30px" }, width: "500px" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        sx={{ padding: "25px" }}
        spacing={4}
      >
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
            src={`${import.meta.env.VITE_STORAGE_URL}/${member?.profile_photo}`}
            sx={{ height: "150px", width: "150px" }}
          />
        </Box>
        <Box>
          <Typography variant="h5" fontWeight={"bold"}>
            {member?.name}
          </Typography>
          <Typography fontWeight={"medium"}>{member?.email}</Typography>
          <Typography variant="body2" sx={{ marginTop: "30px" }}>
            {moment(member?.created_at).locale("id").format("LLLL")}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default CardInfoMember;
