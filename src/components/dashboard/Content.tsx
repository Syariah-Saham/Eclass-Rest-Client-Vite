import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";

const Content: React.FC<PropsWithChildren> = (props) => {
  const dashboard = useAppSelector((state) => state.dashboard);

  return (
    <Box
      sx={{
        paddingLeft: {
          xs: "18px",
          md: dashboard.showSidebar ? "340px" : "115px",
        },
        transition: ".5s",
        paddingRight: { xs: "18px", md: "50px" },
        paddingTop: { xs: "18px", md: "50px" },
        paddingBottom: { xs: "130px", md: "50px" },
        position: "fixed",
        overflow: "auto",
        height: "100vh",
        width: "100vw",
        boxSizing: "border-box",
      }}
    >
      {props.children}
    </Box>
  );
};

export default Content;
