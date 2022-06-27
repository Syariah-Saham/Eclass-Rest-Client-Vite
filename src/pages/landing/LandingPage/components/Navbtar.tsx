import { Box, Button, IconButton, Stack } from "@mui/material";
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/logos/logo_eclass.png";
import { palette } from "../../../../styles/theme/palette";
import MenuIcon from "@mui/icons-material/Menu";

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

interface INavbarProps {
  isOpenSidebar: boolean;
  toggleSidebar: () => void;
}
const Navbtar: React.FC<INavbarProps> = (props) => {
  return (
    <div>
      <nav>
        <Box sx={styleNav}>
          <Stack direction={"row"} justifyContent="space-between">
            <Box>
              <img src={Logo} alt="logo eclass" style={styleImg} />
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                onClick={props.toggleSidebar}
                size="large"
                color="primary"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Stack
              sx={{ display: { xs: "none", md: "flex" } }}
              direction={"row"}
              justifyContent="flex-end"
              alignItems="center"
              gap={3}
            >
              <a href="#home">
                <Button
                  color="secondary"
                  sx={{ color: palette.text.primary }}
                  variant="text"
                >
                  Home
                </Button>
              </a>
              <a href="#courses">
                <Button
                  color="secondary"
                  sx={{ color: palette.text.primary }}
                  variant="text"
                >
                  Kelas
                </Button>
              </a>
              <a href="#mentors">
                <Button
                  color="secondary"
                  sx={{ color: palette.text.primary }}
                  variant="text"
                >
                  Mentor
                </Button>
              </a>
              <Link to="/login">
                <Button
                  color="secondary"
                  sx={{ color: palette.text.primary }}
                  variant="outlined"
                >
                  Masuk
                </Button>
              </Link>
              <Link to={"/register"}>
                <Button color="secondary" variant="contained">
                  Daftar
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </nav>
    </div>
  );
};

export default Navbtar;
