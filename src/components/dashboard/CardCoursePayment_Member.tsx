import {
  Card,
  Typography,
  Box,
  Button,
  Stack,
  IconButton,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import TimelapseRoundedIcon from "@mui/icons-material/TimelapseRounded";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MobileFriendlyRoundedIcon from "@mui/icons-material/MobileFriendlyRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Link, useNavigate } from "react-router-dom";
import { ICourseDetailMember } from "../../interfaces/course-model";
import { formatRp } from "../../helpers/formatRp";
import { addCartItem } from "../../services/member/cart";
import { useAppDispatch } from "../../redux/hooks";
import { addCartItemAction } from "../../redux/actions/cart";
import { openSnackbar } from "../../redux/actions/snackbar";
import {
  addWishlistItem,
  removeWishlistItem,
} from "../../services/member/wishlist";
import {
  addWishlistItemAction,
  removeWishlistItemAction,
} from "../../redux/actions/wishlist";
import { toggleWishlistCourses } from "../../redux/actions/courses";

export const SkeletonCardCoursePayment_Member: React.FC = () => {
  return (
    <Card>
      <Skeleton variant="text" width={"30%"} height="30px" />
      <Skeleton variant="text" width={"60%"} height="44px" />
      <Box sx={{ margin: "24px auto" }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height="50px"
          sx={{ borderRadius: "8px" }}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          gap={3}
          sx={{ marginTop: "20px" }}
        >
          <Skeleton
            variant="rectangular"
            width="50%"
            height="50px"
            sx={{ borderRadius: "8px" }}
          />
          <Skeleton
            variant="rectangular"
            width="50%"
            height="50px"
            sx={{ borderRadius: "8px" }}
          />
        </Stack>
      </Box>
      <Box>
        <Skeleton
          variant="text"
          width="50%"
          height="35px"
          sx={{ marginBottom: "10px" }}
        />
        <Stack direction="column" gap={3}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Stack key={item} direction="row" alignItems="center" gap={2}>
              <Skeleton variant="circular" height="35px" width="35px" />
              <Skeleton variant="text" width="80%" height="35px" />
            </Stack>
          ))}
        </Stack>
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <Skeleton
          variant="text"
          width="50%"
          height="35px"
          sx={{ marginBottom: "10px" }}
        />
        <Stack direction="row" alignItems={"center"} spacing={3}>
          <Skeleton variant="circular" height="50px" width="50px" />
          <Skeleton variant="circular" height="50px" width="50px" />
          <Skeleton variant="circular" height="50px" width="50px" />
          <Skeleton variant="circular" height="50px" width="50px" />
        </Stack>
      </Box>
    </Card>
  );
};

interface ICardCoursePayment_MemberProps {
  course: ICourseDetailMember;
}
const CardCoursePayment_Member: React.FC<ICardCoursePayment_MemberProps> = ({
  course,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isWishList, setIsWishList] = useState<boolean>(false);

  const [loadingButton, setLoadingButton] = useState({
    cart: false,
    wishlist: false,
    purchase: false,
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

  const handleBuy = async () => {
    setLoadingButton({ ...loadingButton, purchase: true });
    try {
      await handleCart();
      navigate("/member/cart");
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    } finally {
      setLoadingButton({ ...loadingButton, purchase: false });
    }
  };

  return (
    <Card>
      <Typography
        variant="h5"
        sx={{ textDecoration: "line-through", opacity: ".7" }}
      >
        {formatRp(course.actual_price)}
      </Typography>
      <Typography variant="h3" sx={{ display: { xs: "none", md: "block" } }}>
        {formatRp(course.price)}
      </Typography>
      <Typography variant="h4" sx={{ display: { xs: "block", md: "none" } }}>
        {formatRp(course.price)}
      </Typography>
      <Box sx={{ margin: "24px auto" }}>
        <Button
          color="secondary"
          sx={{ width: "100%", marginBottom: "15px" }}
          size="large"
          startIcon={<AccountBalanceWalletRoundedIcon />}
          onClick={handleBuy}
          disabled={loadingButton.purchase}
        >
          Beli Sekarang
        </Button>
        <Stack direction="row" justifyContent="space-between">
          <Button
            sx={{ width: "48%" }}
            color="info"
            size="large"
            onClick={handleCart}
            disabled={loadingButton.cart}
          >
            <AddShoppingCartRoundedIcon />
          </Button>
          <Button
            sx={{ width: "48%" }}
            color="error"
            size="large"
            onClick={toggleWishlist}
            disabled={loadingButton.wishlist}
          >
            {isWishList ? <FavoriteIcon /> : <FavoriteBorderRoundedIcon />}
          </Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h5">Kelas ini mencakup :</Typography>
        <Stack direction="column" spacing={3} sx={{ marginTop: "10px" }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <VideoLibraryRoundedIcon />
            <Typography>{course.lessons.length} video pembelajaran</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <TimelapseRoundedIcon />
            <Typography>Akses selamanya</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <WorkspacePremiumIcon />
            <Typography>Sertifikat kelulusan</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <MobileFriendlyRoundedIcon />
            <Typography>Akses dari mana saja</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <ForumRoundedIcon />
            <Typography>Grup konsultasi</Typography>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ marginTop: "24px" }}>
        <Typography variant="h5">Bagikan ke teman</Typography>
        <Stack direction="row" alignItems={"center"} spacing={2}>
          <IconButton color="primary" size="large">
            <WhatsappRoundedIcon sx={{ fontSize: "35px" }} />
          </IconButton>
          <IconButton color="secondary" size="large">
            <FacebookRoundedIcon sx={{ fontSize: "35px" }} />
          </IconButton>
          <IconButton color="info" size="large">
            <TwitterIcon sx={{ fontSize: "35px" }} />
          </IconButton>
          <IconButton color="warning" size="large">
            <ContentCopyIcon sx={{ fontSize: "35px" }} />
          </IconButton>
        </Stack>
      </Box>
    </Card>
  );
};

export default CardCoursePayment_Member;
