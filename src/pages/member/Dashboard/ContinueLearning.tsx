import { Typography, Card, Box, Stack, Button } from "@mui/material";
import React from "react";

const ContinueLearning: React.FC = () => {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        sx={{ marginBottom: "10px" }}
      >
        Lanjut Belajar
      </Typography>
      <Card sx={{ width: "85%" }}>
        <Stack direction="row" spacing={3}>
          <Box
            sx={{
              width: "35%",
              borderRadius: "15px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg"
              alt="thumbnail"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "90%" }}>
              <Typography variant="h5">Lorem ipsum dolor sit amet</Typography>
              <Typography>
                Lorem ipsum dorlo sit amet lorem ipsum dolor sit amet ....
              </Typography>
            </Box>
            <Stack direction="row" justifyContent={"flex-end"}>
              <Button color="secondary">Lanjut</Button>
            </Stack>
          </Box>
        </Stack>
      </Card>
    </>
  );
};

export default ContinueLearning;
