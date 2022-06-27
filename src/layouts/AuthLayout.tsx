import { Box, Card, Container, Stack } from "@mui/material";
import React from "react";
import AuthIllustration from "../assets/images/auth-illustration.svg";

const AuthLayout: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Card
          sx={{
            width: "100%",
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "50%", display: { xs: "none", md: "flex" } }}
          >
            <Box sx={{ width: "80%" }}>
              <img
                src={AuthIllustration}
                alt="auth illustration"
                style={{ width: "100%" }}
              />
            </Box>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ width: { xs: "100%", md: "50%" } }}
          >
            {props.children}
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};

export default AuthLayout;
