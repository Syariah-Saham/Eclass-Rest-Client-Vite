import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";

const Content: React.FC<PropsWithChildren> = (props) => {
  const dashboard = useAppSelector((state) => state.dashboard);

  return (
    <Box
      sx={{
        transition: ".5s",
        paddingLeft: dashboard.showSidebar ? "340px" : "115px",
        paddingRight: "50px",
        paddingTop: "50px",
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
