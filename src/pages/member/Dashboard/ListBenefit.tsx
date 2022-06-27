import {
  Stack,
  Box,
  Typography,
  useTheme,
  SxProps,
  Theme,
} from "@mui/material";
import React from "react";
import CursorIcon from "../../../assets/icons/cursor.svg";
import CheckIcon from "../../../assets/icons/check.svg";
import CashIcon from "../../../assets/icons/cash.svg";
import BookOpenIcon from "../../../assets/icons/book-open.svg";
import { palette } from "../../../styles/theme/palette";

const styleBoxBenefit: SxProps<Theme> = {
  backgroundColor: palette.background.paper,
  width: "90px",
  height: "90px",
  boxSizing: "border-box",
  padding: "10px",
  borderRadius: "50%",
  marginBottom: "13px",
};

const ListBenefit: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        width: "90%",
        paddingTop: "50px",
        borderTop: `1px solid ${theme.palette.background.paper}`,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Box sx={styleBoxBenefit}>
          <img src={CursorIcon} alt="mudah" style={{ width: "100%" }} />
        </Box>
        <Typography variant="h5">Mudah</Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Box sx={styleBoxBenefit}>
          <img src={CheckIcon} alt="mudah" style={{ width: "100%" }} />
        </Box>
        <Typography variant="h5">Syariah</Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Box sx={styleBoxBenefit}>
          <img src={CashIcon} alt="mudah" style={{ width: "100%" }} />
        </Box>
        <Typography variant="h5">Murah</Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Box sx={styleBoxBenefit}>
          <img src={BookOpenIcon} alt="mudah" style={{ width: "100%" }} />
        </Box>
        <Typography variant="h5">Lengkap</Typography>
      </Box>
    </Stack>
  );
};

export default ListBenefit;
