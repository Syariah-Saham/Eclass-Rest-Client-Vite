import {
  Card,
  Typography,
  Box,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import React from "react";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import TimelapseRoundedIcon from "@mui/icons-material/TimelapseRounded";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MobileFriendlyRoundedIcon from "@mui/icons-material/MobileFriendlyRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CardCoursePayment_Member: React.FC = () => {
  return (
    <Card>
      <Typography
        variant="h5"
        sx={{ textDecoration: "line-through", opacity: ".7" }}
      >
        Rp1.000.000
      </Typography>
      <Typography variant="h3">Rp399.000</Typography>
      <Box sx={{ margin: "24px auto" }}>
        <Button
          color="secondary"
          sx={{ width: "100%", marginBottom: "15px" }}
          size="large"
          startIcon={<AccountBalanceWalletRoundedIcon />}
        >
          Beli Sekarang
        </Button>
        <Stack direction="row" justifyContent="space-between">
          <Button sx={{ width: "48%" }} color="info" size="large">
            <AddShoppingCartRoundedIcon />
          </Button>
          <Button sx={{ width: "48%" }} color="error" size="large">
            <FavoriteBorderRoundedIcon />
          </Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h5">Kelas ini mencakup :</Typography>
        <Stack direction="column" spacing={3} sx={{ marginTop: "10px" }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <VideoLibraryRoundedIcon />
            <Typography>12 video pembelajaran</Typography>
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
