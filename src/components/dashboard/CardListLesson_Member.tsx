import { Box, Typography, Card, Stack, useTheme, Button } from "@mui/material";
import React from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const CardListLesson_Member: React.FC = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: "17px" }}>
        Materi yang Dipelajari
      </Typography>
      <Card>
        <Stack direction="column" spacing={3}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: theme.palette.background.default,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              1
            </Box>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, lorem ipsum dol. Lorem ipsum dolor sit
              amet.
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: theme.palette.background.default,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              2
            </Box>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, lorem ipsum dol. Lorem ipsum dolor sit
              amet.
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: theme.palette.background.default,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              3
            </Box>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, lorem ipsum dol. Lorem ipsum dolor sit
              amet.
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: theme.palette.background.default,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              4
            </Box>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, lorem ipsum dol. Lorem ipsum dolor sit
              amet.
            </Typography>
          </Stack>
        </Stack>
        <Button
          sx={{ width: "100%", marginTop: "15px" }}
          startIcon={<ReadMoreIcon />}
          size="large"
        >
          Lihat Selengkapnya
        </Button>
      </Card>
    </Box>
  );
};

export default CardListLesson_Member;
