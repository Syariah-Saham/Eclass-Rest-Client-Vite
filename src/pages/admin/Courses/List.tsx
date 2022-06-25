import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardCourse from "../../../components/CardCourse";

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
  {
    id: 6,
    thumbnail:
      "https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg",
    level: "Professional",
    title: "Prinsip Syariah di Pasar Modal",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sed beatae a nemo illo.",
    price: "Rp2.200.000",
  },
];

const List: React.FC = () => {
  const [menuActive, setMenuActive] = useState<string>("all");

  return (
    <Box>
      <Stack direction={"row"} gap={2} sx={{ marginBottom: "20px" }}>
        <Link to="/admin/courses/create">
          <Button>Tambah Kelas</Button>
        </Link>
        {listMenu.map((menu) => (
          <Button
            key={menu.name}
            variant={menuActive === menu.name ? "outlined" : "text"}
            color="secondary"
            onClick={setMenuActive.bind(null, menu.name)}
          >
            {menu.label}
          </Button>
        ))}
      </Stack>
      <Stack direction="row" gap={5} flexWrap="wrap">
        {dataCourses.map((course) => (
          <CardCourse
            key={course.id}
            target={`/admin/courses/${course.id}`}
            {...course}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default List;
