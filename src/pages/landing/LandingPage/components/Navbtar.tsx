import { Box, Button, Stack } from "@mui/material";
import React, { CSSProperties } from "react";
import Logo from "../../../../assets/logos/logo_eclass.png";
import { palette } from "../../../../styles/theme/palette";

const styleNav: CSSProperties = {
  backgroundColor: palette.background.paper,
  position: "fixed",
  padding: "10px 50px",
  left: 0,
  top: 0,
  right: 0,
  zIndex: 10000,
};

const styleImg: CSSProperties = {
  height: "40px",
};

const Navbtar: React.FC = () => {
  return (
    <div>
      <nav>
        <Box sx={styleNav}>
          <Stack direction={"row"} justifyContent="space-between">
            <Box>
              <img src={Logo} alt="logo eclass" style={styleImg} />
            </Box>
            <Stack direction={"row"} justifyContent="flex-end">
              <Button
                color="secondary"
                sx={{ color: palette.text.primary }}
                variant="text"
              >
                Kategori
              </Button>
              <Button
                color="secondary"
                sx={{ color: palette.text.primary }}
                variant="text"
              >
                Kelas
              </Button>
              <Button
                color="secondary"
                sx={{ color: palette.text.primary }}
                variant="text"
              >
                Mentor
              </Button>
              <Button
                color="secondary"
                sx={{ color: palette.text.primary }}
                variant="text"
              >
                Masuk
              </Button>
              <Button color="secondary" variant="contained">
                Daftar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </nav>
    </div>
  );
};

export default Navbtar;
