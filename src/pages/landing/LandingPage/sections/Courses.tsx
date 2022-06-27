import {
  Box,
  Button,
  Card,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { palette } from "../../../../styles/theme/palette";
import SectionLayout from "../components/SectionLayout";
import TitleSection from "../components/TitleSection";
import StarIcon from "../../../../assets/icons/star.svg";

const listMenu = [
  {
    label: "Semua",
    name: "all",
  },
  {
    label: "Pemula",
    name: "beginner",
  },
  {
    label: "Menengah",
    name: "intermediete",
  },
  {
    label: "Professional",
    name: "expert",
  },
];

const dataCourses = [
  {
    id: 1,
    thumbnail:
      "https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg",
    level: "Pemula",
    title: "Prinsip Syariah di Pasar Modal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis nulla doloribus sunt!",
    price: "Rp1.000.000",
  },
  {
    id: 2,
    thumbnail:
      "https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg",
    level: "Menenganh",
    title: "Prinsip Syariah di Pasar Modal",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores natus autem odio?",
    price: "Rp1.500.000",
  },
  {
    id: 3,
    thumbnail:
      "https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg",
    level: "Professional",
    title: "Prinsip Syariah di Pasar Modal",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sed beatae a nemo illo.",
    price: "Rp1.200.000",
  },
  {
    id: 4,
    thumbnail:
      "https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg",
    level: "Professional",
    title: "Prinsip Syariah di Pasar Modal",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sed beatae a nemo illo.",
    price: "Rp1.400.000",
  },
  {
    id: 5,
    thumbnail:
      "https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg",
    level: "Professional",
    title: "Prinsip Syariah di Pasar Modal",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sed beatae a nemo illo.",
    price: "Rp2.200.000",
  },
];

const Rating: React.FC = () => {
  return (
    <Stack direction="row" justifyContent={"center"} alignItems="center">
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
    </Stack>
  );
};
const Courses: React.FC = () => {
  const [menuActive, setMenuActive] = useState<string>("all");
  const theme = useTheme();

  return (
    <SectionLayout>
      <Box>
        <Typography variant="h5">Daftar Kelas</Typography>
        <TitleSection title="Pilih Kelas Untuk Memulai" />
      </Box>
      <Stack
        sx={{ display: { xs: "none", md: "flex" } }}
        direction={"row"}
        gap={2}
      >
        {listMenu.map((menu) => (
          <Button
            key={menu.name}
            variant={menuActive === menu.name ? "contained" : "text"}
            color="secondary"
            onClick={setMenuActive.bind(null, menu.name)}
          >
            {menu.label}
          </Button>
        ))}
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ margin: "50px auto" }}
        gap={5}
        flexWrap="wrap"
      >
        {dataCourses.map((course) => (
          <Card
            key={course.id}
            sx={{
              width: { xs: "95%", md: "30%" },
              boxSizing: "border-box",
              margin: { xs: "10px auto", md: "auto" },
              padding: "0",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "250px",
                overflow: "hidden",
                background: theme.palette.background.paper,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "100%" }}
                src={course.thumbnail}
                alt="thumbnail"
              />
            </Box>
            <Box sx={{ padding: "30px" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Rating />
                <Typography
                  variant="body2"
                  sx={{
                    color: palette.primary.main,
                    textTransform: "uppercase",
                    fontWeight: "medium",
                    marginBottom: 2,
                  }}
                >
                  {course.level}
                </Typography>
              </Stack>
              <Box>
                <Typography variant="h5">{course.title}</Typography>
                <Typography>{course.description}</Typography>
              </Box>
              <Divider sx={{ margin: "20px auto" }} />
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent={"space-between"}
                alignItems="center"
                spacing={2}
              >
                <Typography
                  fontWeight={"medium"}
                  sx={{ color: `${palette.warning.main} !important` }}
                >
                  {course.price}
                </Typography>
                <Button>Beli Sekarang</Button>
              </Stack>
            </Box>
          </Card>
        ))}
      </Stack>
      <Stack direction="row" justifyContent="center">
        <Button>Lihat Kelas</Button>
      </Stack>
    </SectionLayout>
  );
};

export default Courses;
