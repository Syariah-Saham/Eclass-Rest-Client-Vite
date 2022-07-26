import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import ScreenSearchDesktopTwoToneIcon from "@mui/icons-material/ScreenSearchDesktopTwoTone";

const DataEmptySection: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "60px",
        paddingBottom: "60px",
        border: `1px solid ${theme.palette.background.paper}`,
      }}
    >
      <Stack
        direction="column"
        justifyContent={"center"}
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <ScreenSearchDesktopTwoToneIcon sx={{ fontSize: "150px" }} />
        <Typography variant="h3">Tidak ada data</Typography>
      </Stack>
    </Box>
  );
};

export default DataEmptySection;
