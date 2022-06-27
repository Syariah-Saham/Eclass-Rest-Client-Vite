import { Box, Typography } from "@mui/material";
import React from "react";
import PanToolRoundedIcon from "@mui/icons-material/PanToolRounded";

const SayHello: React.FC = () => {
  return (
    <Box sx={{ width: "85%" }}>
      <Typography variant="h3">
        <b>Hello , </b>
        Latif{" "}
        <PanToolRoundedIcon
          color="warning"
          sx={{
            transform: "rotateY(180deg) rotate(30deg)",
            marginLeft: "15px",
          }}
        />
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis
        eveniet, voluptates nesciunt error explicabo provident beatae aut
        asperiores doloremque.
      </Typography>
    </Box>
  );
};

export default SayHello;
