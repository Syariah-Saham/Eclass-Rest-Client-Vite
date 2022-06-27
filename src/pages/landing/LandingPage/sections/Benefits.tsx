import {
  Box,
  Button,
  Card,
  Stack,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import React, { CSSProperties } from "react";
import CursorIcon from "../../../../assets/icons/cursor.svg";
import CheckIcon from "../../../../assets/icons/check.svg";
import CashIcon from "../../../../assets/icons/cash.svg";
import BookOpenIcon from "../../../../assets/icons/book-open.svg";

const styleLeftSide: SxProps<Theme> = {
  backgroundImage:
    "linear-gradient(308deg, rgb(0, 15, 54) 20%, rgb(0, 40, 151) 120%)",
  width: "60%",
  minHeight: "75vh",
  display: { xs: "none", md: "flex" },
  boxSizing: "border-box",
  paddingLeft: "100px",
};

const listBenefits = [
  {
    id: 1,
    icon: CursorIcon,
    title: "Mudah",
    description:
      "Ingin mulai mengenal dunia saham, namun bingun mulai dari mana? Kami memberikan kemudahan kepada Anda untuk mempelajari transaksi pasar saham.",
  },
  {
    id: 2,
    icon: CheckIcon,
    title: "Syariah",
    description:
      "Ingin mulai mengenal dunia saham, namun bingun mulai dari mana? Kami memberikan kemudahan kepada Anda untuk mempelajari transaksi pasar saham.",
  },
  {
    id: 3,
    icon: CashIcon,
    title: "Murah",
    description:
      "Ingin mulai mengenal dunia saham, namun bingun mulai dari mana? Kami memberikan kemudahan kepada Anda untuk mempelajari transaksi pasar saham.",
  },
  {
    id: 4,
    icon: BookOpenIcon,
    title: "Materi Lengkap",
    description:
      "Ingin mulai mengenal dunia saham, namun bingun mulai dari mana? Kami memberikan kemudahan kepada Anda untuk mempelajari transaksi pasar saham.",
  },
];

const Benefits: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack sx={styleLeftSide} direction="column" justifyContent="center">
          <Typography variant="h5">Membership</Typography>
          <Typography variant="h2" fontWeight={"bold"}>
            Mulai belajar bersama <br /> kami sekarang
          </Typography>
          <Typography>melalui berbagai kelas mulai Rp100.000</Typography>
          <Box sx={{ marginTop: "30px" }}>
            <Button variant="outlined" color="secondary">
              Daftar
            </Button>
          </Box>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-around"}
          alignItems="center"
          sx={{
            width: { xs: "90%", md: "50%" },
            position: { xs: "relative", md: "absolute" },
            right: 0,
          }}
          flexWrap="wrap"
        >
          {listBenefits.map((item) => (
            <Card
              key={item.id}
              sx={{
                width: { xs: "90%", md: "35%" },
                margin: "25px auto",
                textAlign: "center",
              }}
            >
              <Stack
                direction="column"
                justifyContent={"center"}
                alignItems="center"
              >
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                    marginX: "auto",
                    backgroundColor: theme.palette.background.default,
                  }}
                >
                  <img
                    src={item.icon}
                    style={{ width: "70%" }}
                    alt="benefit icon"
                  />
                </Box>
                <Typography variant="h5" fontWeight={"bold"}>
                  {item.title}
                </Typography>
                <Typography>{item.description}</Typography>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Benefits;
