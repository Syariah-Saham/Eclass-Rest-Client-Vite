import { Grid, Stack, Typography, Box, useTheme } from "@mui/material";
import React, { ReactNode } from "react";
import SectionLayout from "../components/SectionLayout";
import TitleSection from "../components/TitleSection";
import Illustration from "../../../../assets/images/invest-growth.svg";
import AcademicIcon from "../../../../assets/icons/academic.svg";
import ComputerIcon from "../../../../assets/icons/computer.svg";
import UserGroupIcon from "../../../../assets/icons/group.svg";
import CreditCardIcon from "../../../../assets/icons/credit-card.svg";

const items = [
  {
    image: AcademicIcon,
    text: "Pastikan Anda memahami konsep dasar dan analisis saham sebelum memulai transaksi dan investasi",
  },
  {
    image: ComputerIcon,
    text: "Lengkapi wawasan Anda dengan berbagai macam informasi yang faktual, relevan, dan terpercaya sebagai kumpulan data untuk analisis Anda.",
  },
  {
    image: UserGroupIcon,
    text: "Jangan ragu untuk melakukan diskusi dengan rekan-rekan untuk mengkritisi serta mempertajam analisis Anda.",
  },
  {
    image: CreditCardIcon,
    text: "Lakukan transaksi dan investasi dengan sistematis dan terukur untuk meminimalisir risiko dan memaksimalkan keuntungan di masa depan.",
  },
];

const StepsInvestment: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionLayout>
      <Stack
        direction="column"
        alignItems={"center"}
        sx={{
          width: { md: "50%" },
          margin: "10px auto",
          textAlign: "center",
        }}
      >
        <TitleSection title="Langkah Investasi" />
        <Typography sx={{ display: { xs: "none", md: "block" } }} variant="h5">
          Masih banyak yang salah langkah saat berinvestasi. Sebenarnya seperti
          apa sih tahapannya supaya sukses berinvestasi?
        </Typography>
        <Typography
          sx={{ display: { xs: "block", md: "none" } }}
          variant="body1"
        >
          Masih banyak yang salah langkah saat berinvestasi. Sebenarnya seperti
          apa sih tahapannya supaya sukses berinvestasi?
        </Typography>
      </Stack>
      <Grid container sx={{ marginTop: { md: "50px" } }}>
        <Grid item md={6}>
          <Stack justifyContent={"center"}>
            <img src={Illustration} alt="illustration" />
          </Stack>
        </Grid>
        <Grid
          item
          container
          md={6}
          wrap="wrap"
          justifyContent={"space-around"}
          sx={{ paddingTop: "80px" }}
        >
          {items.map(
            (item, i): ReactNode => (
              <Grid item key={i} md={5}>
                <Stack direction="column" alignItems={"center"} gap={3}>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      padding: "15px",
                      backgroundColor: theme.palette.background.paper,
                    }}
                  >
                    <img
                      style={{ width: "60px", height: "60px" }}
                      src={item.image}
                      alt="academic icon"
                    />
                  </Box>
                  <Typography variant="body1" textAlign={"center"}>
                    {item.text}
                  </Typography>
                </Stack>
              </Grid>
            )
          )}
        </Grid>
      </Grid>
    </SectionLayout>
  );
};

export default StepsInvestment;
