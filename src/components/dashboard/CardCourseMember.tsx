import {
  Card,
  Box,
  Typography,
  Stack,
  IconButton,
  Skeleton,
  Button,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ZoomOutMapRoundedIcon from "@mui/icons-material/ZoomOutMapRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Link, useNavigate } from "react-router-dom";
import { ICourseItemMember } from "../../interfaces/course-model";
import { formatRp } from "../../helpers/formatRp";
import { useAppDispatch } from "../../redux/hooks";
import { openSnackbar } from "../../redux/actions/snackbar";
import { addCartItem } from "../../services/member/cart";
import { addCartItemAction } from "../../redux/actions/cart";
import {
  addWishlistItem,
  removeWishlistItem,
} from "../../services/member/wishlist";
import {
  addWishlistItemAction,
  removeWishlistItemAction,
} from "../../redux/actions/wishlist";
import { toggleWishlistCourses } from "../../redux/actions/courses";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import { parseCategory } from "../../helpers/parseCategory";

export const CardCourseMemberSkeleton: React.FC = () => {
  return (
    <>
      <Card sx={{ height: "94%", display: { xs: "none", md: "block" } }}>
        <Stack
          direction="column"
          justifyContent={"space-between"}
          sx={{ height: "100%" }}
        >
          <Box>
            <Box sx={{ margin: "-25px", marginBottom: "25px" }}>
              <Skeleton variant="rectangular" width="100%" height="280px" />
            </Box>
            <Skeleton variant="text" height="30px" width="65%" />
            <Skeleton variant="text" height="22px" width="100%" />
            <Skeleton variant="text" height="22px" width="100%" />
            <Skeleton variant="text" height="22px" width="30%" />
          </Box>
          <Box>
            <Box sx={{ margin: "20px auto" }}>
              <Skeleton variant="text" height="23px" width="45%" />
              <Skeleton variant="text" height="40px" width="90%" />
            </Box>
            <Stack direction="row" sx={{ marginTop: "10px" }}>
              <Skeleton variant="rectangular" width="30%" height="20px" />
              <Skeleton variant="rectangular" width="30%" height="20px" />
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              sx={{ marginTop: "10px" }}
            >
              <Skeleton variant="circular" width="46px" height="46px" />
              <Skeleton variant="circular" width="46px" height="46px" />
              <Skeleton variant="circular" width="46px" height="46px" />
            </Stack>
          </Box>
        </Stack>
      </Card>
      <Card sx={{ padding: "14px", display: { xs: "block", md: "none" } }}>
        <Stack direction={"row"} gap={2} alignItems={"flex-start"}>
          <Skeleton
            variant="rectangular"
            width="30%"
            height="70px"
            sx={{ borderRadius: "5px" }}
          />
          <Box sx={{ width: "70%" }}>
            <Skeleton variant="text" width="80%" height="30px" />
            <Skeleton variant="text" width="40%" height="20px" />
          </Box>
        </Stack>
      </Card>
    </>
  );
};

interface ICardCourseMember {
  course: ICourseItemMember;
}
const CardCourseMember: React.FC<ICardCourseMember> = ({ course }) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const [isWishList, setIsWishList] = useState<boolean>(false);
  const [loadingButton, setLoadingButton] = useState({
    cart: false,
    wishlist: false,
  });

  useEffect(() => {
    setIsWishList(course.is_wishlist);
  }, [course.is_wishlist]);

  const handleCart = async () => {
    setLoadingButton({ ...loadingButton, cart: true });
    try {
      await addCartItem({ id: course.id });
      dispatch(addCartItemAction(course));
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Berhasil ditambahkan ke keranjang",
        })
      );
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    } finally {
      setLoadingButton({ ...loadingButton, cart: false });
    }
  };

  const toggleWishlist = async () => {
    setLoadingButton({ ...loadingButton, wishlist: true });
    try {
      if (!isWishList) {
        await addWishlistItem({ id: course.id });
        dispatch(addWishlistItemAction(course));
      } else {
        await removeWishlistItem({ id: course.id });
        dispatch(removeWishlistItemAction({ id: course.id }));
      }
      setIsWishList(!isWishList);
      dispatch(toggleWishlistCourses({ id: course.id, status: !isWishList }));
      dispatch(
        openSnackbar({
          severity: "success",
          message: `Berhasil ${
            !isWishList ? "ditambahkan" : "dihapus"
          } ke wishlist`,
        })
      );
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.response,
        })
      );
    } finally {
      setLoadingButton({ ...loadingButton, wishlist: false });
    }
  };

  return (
    <>
      <Box sx={{ height: "100%", display: { xs: "none", md: "block" } }}>
        <Card sx={{ height: "95%" }}>
          <Stack
            direction="column"
            justifyContent={"space-between"}
            sx={{ height: "100%" }}
          >
            <Box>
              <Box
                sx={{
                  margin: "-40px",
                  marginBottom: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src={`${import.meta.env.VITE_STORAGE_URL}/${
                    course.thumbnail
                  }`}
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
                  {formatRp(course.actual_price)}
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
                  <Typography fontWeight={"medium"}>
                    {course.enrolled_students} Siswa
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                sx={{ marginTop: "10px" }}
              >
                {course.is_owned ? (
                  <Stack
                    sx={{ marginTop: "10px", width: "100%" }}
                    justifyContent="center"
                  >
                    <Link to={`/member/courses/${course.id}/corridor`}>
                      <Button
                        sx={{ width: "100%" }}
                        color="secondary"
                        startIcon={<PlayLessonIcon />}
                      >
                        Lanjut Belajar
                      </Button>
                    </Link>
                  </Stack>
                ) : (
                  <>
                    <Link to={`/member/courses/${course.id}`}>
                      <IconButton size="large" color="secondary">
                        <ZoomOutMapRoundedIcon />
                      </IconButton>
                    </Link>
                    <IconButton
                      disabled={loadingButton.cart}
                      size="large"
                      color="info"
                      onClick={handleCart}
                    >
                      <AddShoppingCartRoundedIcon />
                    </IconButton>
                    <IconButton
                      size="large"
                      color="error"
                      onClick={toggleWishlist}
                      disabled={loadingButton.wishlist}
                    >
                      {isWishList ? (
                        <FavoriteRoundedIcon />
                      ) : (
                        <FavoriteBorderRoundedIcon />
                      )}
                    </IconButton>
                  </>
                )}
              </Stack>
            </Box>
          </Stack>
        </Card>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Link
          to={`/member/courses/${course.id}/${
            course.is_owned ? "corridor" : ""
          }`}
        >
          <Card
            sx={{
              padding: "14px",
              "&:hover": {
                boxShadow: `0px 0px 1px 1px ${theme.palette.secondary.main}`,
              },
            }}
          >
            <Stack direction={"row"} gap={2} alignItems={"flex-start"}>
              <Box sx={{ width: "30%" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    overflow: "hidden",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    style={{ width: "100%" }}
                    src={`${import.meta.env.VITE_STORAGE_URL}/${
                      course.thumbnail
                    }`}
                  />
                </Box>
                <Typography
                  variant={"caption"}
                  sx={{
                    display: "block",
                    marginTop: "5px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {parseCategory(course.category)}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "70%",
                }}
              >
                <Typography variant="body2" fontWeight={"bold"}>
                  {course.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: `${theme.palette.warning.main} !important` }}
                >
                  {formatRp(course.price)}
                </Typography>
                {course.is_owned ? (
                  <Button
                    color="secondary"
                    sx={{
                      padding: "2px 5px",
                      fontSize: "12px",
                      marginTop: "10px",
                    }}
                  >
                    Lanjut Belajar
                  </Button>
                ) : (
                  <Stack
                    direction="row"
                    sx={{ marginTop: "10px" }}
                    alignItems="center"
                    gap={3}
                  >
                    <IconButton
                      color="info"
                      size="small"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCart();
                      }}
                    >
                      <AddShoppingCartRoundedIcon sx={{ fontSize: "20px" }} />
                    </IconButton>
                    <IconButton
                      color="error"
                      size="small"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist();
                      }}
                    >
                      {isWishList ? (
                        <FavoriteRoundedIcon sx={{ fontSize: "20px" }} />
                      ) : (
                        <FavoriteBorderRoundedIcon sx={{ fontSize: "20px" }} />
                      )}
                    </IconButton>
                  </Stack>
                )}
              </Box>
            </Stack>
          </Card>
        </Link>
      </Box>
    </>
  );
};

export default CardCourseMember;
