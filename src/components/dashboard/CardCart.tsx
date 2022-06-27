import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

const CardCart: React.FC = () => {
  return (
    <Card sx={{ width: "100%" }}>
      <Stack direction="row" spacing={3}>
        <Box
          sx={{
            width: "180px",
            height: "120px",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg"
          />
        </Box>
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{ width: "75%" }}
        >
          <Box>
            <Typography variant="h5">Lorem ipsum dolor sit amet</Typography>
            <Typography>
              Lorem ipsum dolor sit amet lorem ipsum dolor sit amet....
            </Typography>
          </Box>
          <Stack direction="row" spacing={5}>
            <Stack
              direction="row"
              alignItems={"center"}
              spacing={1}
              sx={{ width: "200px" }}
            >
              <VideoLibraryRoundedIcon />
              <Typography fontWeight={"medium"}>12 Materi</Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems={"center"}
              spacing={1}
              sx={{ width: "200px" }}
            >
              <GroupsRoundedIcon />
              <Typography fontWeight={"medium"}>120 Siswa</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="column" justifyContent={"space-between"}>
          <Stack direction="row" justifyContent={"flex-end"} spacing={2}>
            <IconButton size="large" color="info">
              <AddShoppingCartRoundedIcon />
            </IconButton>
            <IconButton size="large" color="error">
              <DeleteOutlineRoundedIcon />
            </IconButton>
          </Stack>
          <Typography variant="h4">Rp399.000</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CardCart;
