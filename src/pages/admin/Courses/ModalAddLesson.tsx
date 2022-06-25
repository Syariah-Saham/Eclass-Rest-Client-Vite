import { Button, Card, Fade, Modal, Stack } from "@mui/material";
import React, { useState } from "react";
import InputLabel from "../../../components/InputLabel";
import MDEditor from "@uiw/react-md-editor";

const ModalAddLesson: React.FC<{ show: boolean; onClose: () => void }> = (
  props
) => {
  const [value, setValue] = useState<string | undefined>("");
  return (
    <Modal open={props.show} onClose={props.onClose}>
      <Fade in={props.show}>
        <Card sx={{ width: "50%" }}>
          <form>
            <InputLabel
              label="Judul"
              inputProps={{
                type: "text",
                placeholder: "Judul",
              }}
            />
            <InputLabel
              label="URL Video"
              inputProps={{
                type: "text",
                placeholder: "URL Video",
              }}
            />
            <MDEditor
              height={500}
              value={value}
              onChange={(val) => setValue(val)}
            />
          </form>
          <Stack
            direction="row"
            justifyContent={"center"}
            gap={3}
            sx={{ marginTop: "20px" }}
          >
            <Button
              variant="outlined"
              color="secondary"
              onClick={props.onClose}
            >
              Batal
            </Button>
            <Button color="secondary">Kirim</Button>
          </Stack>
        </Card>
      </Fade>
    </Modal>
  );
};

export default ModalAddLesson;
