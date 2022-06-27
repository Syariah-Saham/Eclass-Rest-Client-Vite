import { Card, Grid, Stack, Typography, Box, Divider } from "@mui/material";
import React, { ReactNode } from "react";
import SectionLayout from "../components/SectionLayout";
import TitleSection from "../components/TitleSection";
import StarIcon from "../../../../assets/icons/star.svg";

const students = [
  {
    id: 1,
    photo:
      "https://i.pinimg.com/564x/f6/c3/79/f6c379ccfb9130cfd36c63722d5251be.jpg",
    name: "Siswa Baru 1",
    occupation: "Financial Analyst",
    testimoni:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa  debitis ab culpa fuga, non doloremque officia, ea quibusdam rem corporis beatae nemo impedit eveniet quisquam dolores aliquam  adipisci? Fuga, distinctio. ",
  },
  {
    id: 2,
    photo:
      "https://i.pinimg.com/564x/1f/91/f0/1f91f0145c7b28243076844f291314c1.jpg",
    name: "Siswa Baru 2",
    occupation: "Financial Analyst",
    testimoni:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa  debitis ab culpa fuga, non doloremque officia, ea quibusdam rem corporis beatae nemo impedit eveniet quisquam dolores aliquam  adipisci? Fuga, distinctio. consectetur adipisicing elit. Ipsa  debitis ab culpa fuga, non doloremque officia",
  },
  {
    id: 3,
    photo:
      "https://i.pinimg.com/564x/c0/76/0e/c0760e4fd3b2cf1de75e18fba17a8ef0.jpg",
    name: "Siswa Baru 3",
    occupation: "Financial Analyst",
    testimoni:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa  debitis ab culpa fuga, non doloremque officia, ea quibusdam rem corporis beatae nemo impedit eveniet quisquam dolores aliquam  adipisci? Fuga, distinctio.impedit eveniet quisquam dolores aliquam  adipisci? Fuga, ",
  },
];

const Testimonials: React.FC = () => {
  return (
    <SectionLayout>
      <Stack direction="column" alignItems="center">
        <Typography variant="h5">Testimoni</Typography>
        <TitleSection title="Apa Kata Mereka" />
      </Stack>
      <Grid
        container
        justifyContent={"space-around"}
        sx={{ marginTop: "50px" }}
      >
        {students.map(
          (student): ReactNode => (
            <Grid
              key={student.id}
              item
              md={4}
              gap={2}
              sx={{
                boxSizing: "border-box",
                padding: "20px",
                marginBottom: "40px",
              }}
            >
              <Card sx={{ textAlign: "center", height: "100%" }}>
                <Box>
                  <Box
                    sx={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "20px",
                      marginX: "auto",
                    }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src={student.photo}
                      alt="student"
                    />
                  </Box>
                  <Typography variant="h5">{student.name}</Typography>
                  <Typography variant="body2" color={"text.disabled"}>
                    {student.occupation}
                  </Typography>
                </Box>
                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                <Stack
                  direction="column"
                  justifyContent={"space-between"}
                  sx={{ height: "45%" }}
                >
                  <Typography>{student.testimoni}</Typography>
                  <Stack
                    direction="row"
                    justifyContent={"center"}
                    alignItems="center"
                    gap={1}
                    sx={{ marginTop: "20px" }}
                  >
                    <img
                      src={StarIcon}
                      alt="star icon"
                      style={{ height: "30px" }}
                    />
                    <img
                      src={StarIcon}
                      alt="star icon"
                      style={{ height: "30px" }}
                    />
                    <img
                      src={StarIcon}
                      alt="star icon"
                      style={{ height: "30px" }}
                    />
                    <img
                      src={StarIcon}
                      alt="star icon"
                      style={{ height: "30px" }}
                    />
                    <img
                      src={StarIcon}
                      alt="star icon"
                      style={{ height: "30px" }}
                    />
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </SectionLayout>
  );
};

export default Testimonials;
