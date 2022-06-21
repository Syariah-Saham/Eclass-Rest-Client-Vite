import { DeleteRounded } from "@mui/icons-material";
import {
  Modal,
  Stack,
  Typography,
  Card,
  Button,
  Box,
  Fade,
} from "@mui/material";
import React, { useState } from "react";
import { IModalDeleteProps } from "../../interfaces/components/modal";
import LoadingIndicator from "../LoadingIndicator";

const ModalDelete: React.FC<IModalDeleteProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await props.onDelete();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      props.onClose();
    }
  };

  return (
    <Modal open={props.show} onClose={() => {}}>
      <Fade in={props.show}>
        <Card sx={{ outline: "none", padding: "30px 30px" }}>
          <Box sx={{ textAlign: "center" }}>
            <DeleteRounded color="error" sx={{ fontSize: "150px" }} />
          </Box>
          <Typography sx={{ margin: "20px auto" }}>
            Apakah kamu yakin akan menghapus data yang dipilih?
          </Typography>
          <Stack
            direction="row"
            justifyContent={"space-around"}
            alignItems="center"
            sx={{ marginTop: "25px" }}
          >
            <Button
              onClick={props.onClose}
              sx={{ width: "45%" }}
              variant="outlined"
              color="secondary"
            >
              Batal
            </Button>
            <Button
              disabled={loading}
              onClick={handleDelete}
              sx={{ width: "45%" }}
              color="error"
            >
              {!loading ? "Hapus" : <LoadingIndicator />}
            </Button>
          </Stack>
        </Card>
      </Fade>
    </Modal>
  );
};

export default ModalDelete;
