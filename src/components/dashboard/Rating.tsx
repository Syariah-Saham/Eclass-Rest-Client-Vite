import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import StarIcon from "../../assets/icons/star.svg";

const styles = {
  rating: {
    fontWeight: "bold",
    marginBottom: 2,
    padding: "10px 20px",
    borderRadius: "15px",
  },
};

const Rating: React.FC<{ star: number }> = ({ star = 5 }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent={"center"}
      alignItems="center"
      gap={1}
      sx={{
        color: theme.palette.warning.main,
        backgroundColor: theme.palette.background.paper,
        ...styles.rating,
      }}
    >
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
      <Typography variant="body2">{star}</Typography>
    </Stack>
  );
};

export default Rating;
