import {
  Box,
  Button,
  Card,
  IconButton,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { formatRp } from "../../helpers/formatRp";
import { ICourseItemMember } from "../../interfaces/course-model";
import { useAppDispatch } from "../../redux/hooks";
import { openSnackbar } from "../../redux/actions/snackbar";
import { addCartItem } from "../../services/member/cart";
import { addCartItemAction } from "../../redux/actions/cart";
import { removeWishlistItem } from "../../services/member/wishlist";
import { removeWishlistItemAction } from "../../redux/actions/wishlist";
import { toggleWishlistCourses } from "../../redux/actions/courses";
import { parseCategory } from "../../helpers/parseCategory";
import { Link } from "react-router-dom";

const styles = {
  box: {
    width: "180px",
    height: "120px",
    borderRadius: "14px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export const CardCartSkeleton: React.FC = () => {
  return (
    <Card sx={{ width: "100%" }}>
      <Stack direction="row" spacing={3}>
        <Box sx={styles.box}>
          <Skeleton variant="rectangular" height="100%" width="100%" />
        </Box>
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{ width: "75%" }}
        >
          <Box>
            <Skeleton variant="text" height="26px" width="60%" />
            <Skeleton variant="text" height="20px" width="90%" />
            <Skeleton variant="text" height="20px" width="70%" />
          </Box>
          <Stack direction="row" spacing={5}>
            <Skeleton variant="text" height="24px" width="100px" />
            <Skeleton variant="text" height="24px" width="100px" />
          </Stack>
        </Stack>
        <Stack direction="column" justifyContent={"space-between"}>
          <Stack direction="row" justifyContent={"flex-end"} spacing={2}>
            <Skeleton variant="circular" width="35px" height="35px" />
          </Stack>
          <Skeleton variant="text" width="180px" height="40px" />
        </Stack>
      </Stack>
    </Card>
  );
};

interface ICardCartProps {
  isCart: boolean;
  course: ICourseItemMember;
  handleRemove?: (id: number) => void;
  loadingRemove?: boolean;
}
const CardCart: React.FC<ICardCartProps> = ({
  isCart,
  course,
  handleRemove,
  loadingRemove,
}) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const handleAddToCart = async () => {
    setLoading(true);
    try {
      await addCartItem({ id: course.id });
      await removeWishlistItem({ id: course.id });
      dispatch(addCartItemAction(course));
      dispatch(removeWishlistItemAction({ id: course.id }));
      dispatch(toggleWishlistCourses({ id: course.id, status: false }));

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
      setLoading(false);
    }
  };

  return (
    <>
      <Card sx={{ width: "100%", display: { xs: "none", md: "block" } }}>
        <Stack direction="row" spacing={3}>
          <Box sx={styles.box}>
            <img
              style={{ height: "100%" }}
              src={`${import.meta.env.VITE_STORAGE_URL}/${course.thumbnail}`}
            />
          </Box>
          <Stack
            direction="column"
            justifyContent="space-between"
            sx={{ width: "75%" }}
          >
            <Box>
              <Typography variant="h5">{course.title}</Typography>
              <Typography
                variant="body1"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                {course.short_description}
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
                <Typography fontWeight={"medium"}>
                  {course.total_lessons} Materi
                </Typography>
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
              {!isCart ? (
                <IconButton
                  size="large"
                  color="info"
                  disabled={loading}
                  onClick={handleAddToCart}
                >
                  <AddShoppingCartRoundedIcon />
                </IconButton>
              ) : (
                <IconButton
                  size="large"
                  color="error"
                  onClick={handleRemove?.bind(null, course.id)}
                  disabled={loadingRemove}
                >
                  <DeleteOutlineRoundedIcon />
                </IconButton>
              )}
            </Stack>
            <Typography variant="h4">{formatRp(course.price)}</Typography>
          </Stack>
        </Stack>
      </Card>
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
                {!isCart ? (
                  <Button
                    size="small"
                    color="info"
                    sx={{ padding: "0px", fontSize: "12px", marginTop: "10px" }}
                    disabled={loading}
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart();
                    }}
                  >
                    keranjang
                  </Button>
                ) : (
                  <Button
                    size="small"
                    color="error"
                    disabled={loadingRemove}
                    sx={{ padding: "0px", fontSize: "12px", marginTop: "10px" }}
                    onClick={(e) => {
                      e.preventDefault();
                      if (handleRemove) {
                        handleRemove(course.id);
                      }
                    }}
                  >
                    hapus
                  </Button>
                )}
              </Box>
            </Stack>
          </Card>
        </Link>
      </Box>
    </>
  );
};

export default CardCart;
