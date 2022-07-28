import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import ScreenSearchDesktopTwoToneIcon from "@mui/icons-material/ScreenSearchDesktopTwoTone";

const DataEmptySection: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: { xs: "30px", md: "60px" },
        paddingBottom: { xs: "30px", md: "60px" },
        border: `1px solid ${theme.palette.background.paper}`,
      }}
    >
      <Stack
        direction="column"
        justifyContent={"center"}
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <ScreenSearchDesktopTwoToneIcon
          sx={{ fontSize: { xs: "80px", md: "150px" } }}
        />
        <Typography variant="h3" sx={{ display: { xs: "none", md: "block" } }}>
          Tidak ada data
        </Typography>
        <Typography variant="h5" sx={{ display: { xs: "block", md: "none" } }}>
          Tidak ada data
        </Typography>
      </Stack>
    </Box>
  );
};

export default DataEmptySection;
