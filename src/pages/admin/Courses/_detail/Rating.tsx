import { Stack } from "@mui/material";
import React from "react";
import StarIcon from "../../../../assets/icons/star.svg";

const Rating: React.FC<{ count: number }> = ({ count }) => {
  const stars = [];

  for (let i = 0; i < count; i++) {
    stars.push(
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
    );
  }

  return (
    <Stack direction="row" alignItems="center">
      {stars}
    </Stack>
  );
};

export default Rating;
