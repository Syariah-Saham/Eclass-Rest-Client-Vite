import { Card, Box, Typography, Stack, IconButton, Fade } from "@mui/material";
import React, { useState } from "react";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ZoomOutMapRoundedIcon from "@mui/icons-material/ZoomOutMapRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const CardCourseMember: React.FC = () => {
  const [isWishList, setIsWishList] = useState<boolean>(false);

  return (
    <Card>
      <Box sx={{ margin: "-25px", marginBottom: "25px" }}>
        <img
          style={{ width: "100%" }}
          src="https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg"
        />
      </Box>
      <Typography variant="h5">Lorem ipsum dolor sit amet</Typography>
      <Typography>
        Lorem ipsum dolor sit amet lorem ipsum dolor sit amet....
      </Typography>
      <Box sx={{ margin: "20px auto" }}>
        <Typography
          variant="body2"
          sx={{ textDecoration: "line-through", opacity: ".7" }}
        >
          Rp1.000.000
        </Typography>
        <Typography variant="h4">
          Rp399.000{" "}
          <Typography variant="h6" sx={{ display: "inline-block" }}>
            / Selamanya
          </Typography>
        </Typography>
      </Box>
      <Stack direction="row" sx={{ marginTop: "10px" }}>
        <Stack
          direction="row"
          alignItems={"center"}
          spacing={1}
          sx={{ width: "45%" }}
        >
          <VideoLibraryRoundedIcon />
          <Typography fontWeight={"medium"}>12 Materi</Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems={"center"}
          spacing={1}
          sx={{ width: "45%" }}
        >
          <GroupsRoundedIcon />
          <Typography fontWeight={"medium"}>120 Siswa</Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ marginTop: "10px" }}
      >
        <IconButton size="large" color="secondary">
          <ZoomOutMapRoundedIcon />
        </IconButton>
        <IconButton size="large" color="info">
          <AddShoppingCartRoundedIcon />
        </IconButton>
        <IconButton
          size="large"
          color="error"
          onClick={() => setIsWishList(!isWishList)}
        >
          {isWishList ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
        </IconButton>
      </Stack>
    </Card>
  );
};

export default CardCourseMember;
