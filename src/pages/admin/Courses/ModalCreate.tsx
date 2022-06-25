import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FilePond } from "react-filepond";
import InputLabel from "../../../components/InputLabel";
import SelectLabel from "../../../components/SelectLabel";
import { IModalCreateCourseProps } from "../../../interfaces/components/modal";

const levelOptions = [
  {
    label: "Pemula",
    value: "begineer",
  },
  {
    label: "Menengah",
    value: "intermediete",
  },
  {
    label: "Professional",
    value: "expert",
  },
];

const mentorOptions = [
  {
    label: "Mentor 1",
    value: "Mentor 1",
  },
  {
    label: "Mentor 2",
    value: "Mentor 2",
  },
  {
    label: "Mentor 3",
    value: "Mentor 3",
  },
];

const ModalCreate: React.FC<IModalCreateCourseProps> = (props) => {
  const [files, setFiles] = useState([]);

  return (
    <Dialog open={props.show} onClose={props.onClose} fullWidth maxWidth="xl">
      <Card
        sx={{
          outline: "none",
          padding: "30px",
          width: "700px",
          height: "70vh",
        }}
      >
        <form>
          <DialogTitle>
            <Typography variant="h4">Tambah Kelas</Typography>
          </DialogTitle>
          <DialogContent sx={{ height: "540px" }}>
            <Stack direction="column" gap={3}>
              <Stack direction="row" gap={2}>
                <InputLabel
                  label="Judul"
                  inputProps={{
                    type: "text",
                    placeholder: "Judul",
                  }}
                />
                <InputLabel
                  label="Harga"
                  inputProps={{
                    type: "text",
                    placeholder: "Harga",
                  }}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <SelectLabel
                  label="Level"
                  selectProps={{
                    placeholder: "Pilih Level",
                    options: levelOptions,
                  }}
                />
                <SelectLabel
                  label="Mentor"
                  selectProps={{
                    placeholder: "Pilih Mentor",
                    options: mentorOptions,
                  }}
                />
              </Stack>
              <FilePond
                files={files}
                allowMultiple={false}
                name="files"
                labelIdle={`<div><p>Drag & Drop your files or </p> <span class="filepond--label-action">Browse</span></div>`}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ marginTop: "30px" }}>
            <Button
              variant="outlined"
              onClick={props.onClose}
              color="secondary"
            >
              Batal
            </Button>
            <Button>Submit</Button>
          </DialogActions>
        </form>
      </Card>
    </Dialog>
  );
};

export default ModalCreate;
