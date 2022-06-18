import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { palette } from "../../../../styles/theme/palette";
import SectionLayout from "../components/SectionLayout";
import TitleSection from "../components/TitleSection";

const listMentors = [
  {
    id: 1,
    photo:
      "https://i.pinimg.com/564x/f6/c3/79/f6c379ccfb9130cfd36c63722d5251be.jpg",
    name: "Mentor 1",
    description: "Mentor Pengajar",
  },
  {
    id: 2,
    photo:
      "https://i.pinimg.com/564x/1f/91/f0/1f91f0145c7b28243076844f291314c1.jpg",
    name: "Mentor 2",
    description: "Mentor Pengajar",
  },
  {
    id: 3,
    photo:
      "https://i.pinimg.com/564x/c0/76/0e/c0760e4fd3b2cf1de75e18fba17a8ef0.jpg",
    name: "Mentor 3",
    description: "Mentor Pengajar",
  },
];

const Mentors: React.FC = () => {
  return (
    <SectionLayout>
      <Stack direction="column" alignItems={"center"}>
        <Typography variant="h5">Mentor</Typography>
        <TitleSection title="Fasilitator Kelas" />
      </Stack>
      <Grid
        container
        justifyContent={"space-around"}
        gap={4}
        sx={{ marginTop: "50px" }}
      >
        {listMentors.map(
          (mentor): ReactNode => (
            <Grid key={mentor.id} item md={3}>
              <Stack direction="column" alignItems="center">
                <Box
                  sx={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: `4px solid ${palette.text.primary}`,
                    marginBottom: "20px",
                  }}
                >
                  <img
                    style={{ width: "100%" }}
                    src={mentor.photo}
                    alt="mentor"
                  />
                </Box>
                <Typography variant="h4">{mentor.name}</Typography>
                <Typography variant="body1">{mentor.description}</Typography>
              </Stack>
            </Grid>
          )
        )}
      </Grid>
    </SectionLayout>
  );
};

export default Mentors;
