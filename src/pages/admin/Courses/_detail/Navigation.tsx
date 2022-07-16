import { Stack, Button } from "@mui/material";
import React from "react";

const Navigation: React.FC = () => {
  return (
    <Stack direction="row" gap={3} sx={{ marginBottom: "30px" }}>
      <Button color="success">Edit</Button>
      <Button color="error">Hapus</Button>
      <Button color="secondary">Publish</Button>
      <Button color="warning">Ujian</Button>
    </Stack>
  );
};

export default Navigation;
