import { Box } from "@mui/material";
import React from "react";

const CourseBanner_Member: React.FC = () => {
  return (
    <Box
      sx={{
        height: "300px",
        borderRadius: "26px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "35px",
      }}
    >
      <img
        style={{ width: "100%" }}
        src="https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg"
      />
    </Box>
  );
};

export default CourseBanner_Member;
