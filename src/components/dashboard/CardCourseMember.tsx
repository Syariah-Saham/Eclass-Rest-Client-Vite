import { Card, Box, Typography, Stack, IconButton, Fade } from "@mui/material";
import React, { useState } from "react";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ZoomOutMapRoundedIcon from "@mui/icons-material/ZoomOutMapRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Link } from "react-router-dom";
import { ICourseItemMember } from "../../interfaces/course-model";
import { formatRp } from "../../helpers/formatRp";

interface ICardCourseMember {
  course: ICourseItemMember;
}
const CardCourseMember: React.FC<ICardCourseMember> = ({ course }) => {
  const [isWishList, setIsWishList] = useState<boolean>(false);

  return (
    <Card sx={{ height: "94%" }}>
      <Stack
        direction="column"
        justifyContent={"space-between"}
        sx={{ height: "100%" }}
      >
        <Box>
          <Box sx={{ margin: "-25px", marginBottom: "25px" }}>
            <img
              style={{ width: "100%" }}
              src={`${import.meta.env.VITE_STORAGE_URL}/${course.thumbnail}`}
            />
          </Box>
          <Typography variant="h5">{course.title}</Typography>
          <Typography>{course.short_description}</Typography>
        </Box>
        <Box>
          <Box sx={{ margin: "20px auto" }}>
            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", opacity: ".7" }}
            >
              Rp1.000.000
            </Typography>
            <Stack direction="row" alignItems="flex-end" gap={2}>
              <Typography variant="h4">{formatRp(course.price)}</Typography>
              <Typography variant="h6" sx={{ display: "inline-block" }}>
                / Selamanya
              </Typography>
            </Stack>
          </Box>
          <Stack direction="row" sx={{ marginTop: "10px" }}>
            <Stack
              direction="row"
              alignItems={"center"}
              spacing={1}
              sx={{ width: "45%" }}
            >
              <VideoLibraryRoundedIcon />
              <Typography fontWeight={"medium"}>
                {course.total_lessons} Materi
              </Typography>
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
            <Link to={`/member/courses/1`}>
              <IconButton size="large" color="secondary">
                <ZoomOutMapRoundedIcon />
              </IconButton>
            </Link>
            <IconButton size="large" color="info">
              <AddShoppingCartRoundedIcon />
            </IconButton>
            <IconButton
              size="large"
              color="error"
              onClick={() => setIsWishList(!isWishList)}
            >
              {isWishList ? (
                <FavoriteRoundedIcon />
              ) : (
                <FavoriteBorderRoundedIcon />
              )}
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};

export default CardCourseMember;
