import { Box, Link, Stack, Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import WhiteLogo from "../../../../assets/logos/logo_putih.png";
import FBIcon from "../../../../assets/images/socmed/fb.svg";
import IGIcon from "../../../../assets/images/socmed/ig.svg";
import TWIcon from "../../../../assets/images/socmed/tw.svg";
import WAIcon from "../../../../assets/images/socmed/wa.svg";
import YTIcon from "../../../../assets/images/socmed/yt.svg";
import { palette } from "../../../../styles/theme/palette";

const styleLink: CSSProperties = {
  display: "block",
  marginBottom: "8px",
};

const Footer: React.FC = () => {
  return (
    <Box sx={{ borderTop: `1px solid ${palette.text.primary}` }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-around"}
        sx={{ padding: { xs: "50px 25px", md: "50px" } }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "20%" },
            marginBottom: { xs: "20px", md: "10px" },
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "12px" }}>
            Halaman
          </Typography>
          <Link href="#" color={"secondary"} sx={styleLink}>
            Home
          </Link>
          <Link href="#" color={"secondary"} sx={styleLink}>
            Kategori
          </Link>
          <Link href="#" color={"secondary"} sx={styleLink}>
            Kelas
          </Link>
          <Link href="#" color={"secondary"} sx={styleLink}>
            Mentor
          </Link>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "20%" },
            marginBottom: { xs: "20px", md: "10px" },
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "12px" }}>
            Kelas
          </Typography>
          <Link href="#" color={"secondary"} sx={styleLink}>
            Pemula
          </Link>
          <Link href="#" color={"secondary"} sx={styleLink}>
            Menengah
          </Link>
          <Link href="#" color={"secondary"} sx={styleLink}>
            Professional
          </Link>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "20%" },
            marginBottom: { xs: "20px", md: "10px" },
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "12px" }}>
            Membership
          </Typography>
          <Link href="#" color={"secondary"} sx={styleLink}>
            Daftar
          </Link>
          <Link href="#" color={"secondary"} sx={styleLink}>
            Masuk
          </Link>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "30%" } }}>
          <Typography variant="h5" sx={{ marginBottom: "12px" }}>
            Hubungi Kami
          </Typography>
          <Typography variant="body1">
            Syariah Saham adalah komunitas saham syariah pertama di Indonesia.
            Kami hadir dengan Visi "Memasyarakatkan Saham Syariah dan
            Mensyariahkan Saham Masyarakat".
          </Typography>
          <Typography variant="body1">
            Office : Perkantoran Tanjung Mas Raya, Blok B1 Nomor 44, Tanjung
            Barat, Jagakarsa, Jakarta Selatan 12530.
          </Typography>
          <Stack
            direction="row"
            gap={{ xs: 1, md: 3 }}
            sx={{ marginTop: "20px" }}
          >
            <a href="#">
              <img src={FBIcon} alt="fb icon" />
            </a>
            <a href="#">
              <img src={IGIcon} alt="fb icon" />
            </a>
            <a href="#">
              <img src={TWIcon} alt="fb icon" />
            </a>
            <a href="#">
              <img src={WAIcon} alt="fb icon" />
            </a>
            <a href="#">
              <img src={YTIcon} alt="fb icon" />
            </a>
          </Stack>
        </Box>
      </Stack>
      <footer>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems="center"
          sx={{ padding: { xs: "20px 10px", md: "10px 50px" } }}
        >
          <Box>
            <img
              src={WhiteLogo}
              style={{ height: "50px" }}
              alt="logo syariah saham"
            />
          </Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={"flex-end"}
            gap={5}
          >
            <Link color="secondary" href="#">
              Kebijakan Privasi
            </Link>
            <Link color="secondary" href="#">
              Kebijakan Layanan
            </Link>
            <Typography variant="body1">
              ©Copyright 2022 by PT. Syariah Saham Indonesia. All rights
              reserved
            </Typography>
          </Stack>
        </Stack>
      </footer>
    </Box>
  );
};

export default Footer;
