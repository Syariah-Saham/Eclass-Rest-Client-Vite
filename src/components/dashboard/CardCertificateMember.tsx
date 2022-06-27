import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";

const CardCertificateMember: React.FC = () => {
  return (
    <Card>
      <Box
        sx={{ borderRadius: "24px", overflow: "hidden", marginBottom: "15px" }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg"
        />
      </Box>
      <Typography variant="h5">Lorem ipsum dolor sit amet</Typography>
      <Typography>4 Mei 2022</Typography>
      <Button color="secondary" sx={{ width: "100%", marginTop: "15px" }}>
        Cetak Sertifikat
      </Button>
    </Card>
  );
};

export default CardCertificateMember;
