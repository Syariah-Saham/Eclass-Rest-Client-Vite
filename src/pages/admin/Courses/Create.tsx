import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { FilePond } from "react-filepond";
import InputLabel from "../../../components/InputLabel";
import SelectLabel from "../../../components/SelectLabel";
import MDEditor from "@uiw/react-md-editor";
import { Link } from "react-router-dom";

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

const DescriptionEditor = () => {
  const [value, setValue] = useState<string | undefined>("");

  return (
    <Card>
      <Typography variant="h5">Deskripsi</Typography>
      <MDEditor height={600} value={value} onChange={(val) => setValue(val)} />
    </Card>
  );
};

const Create: React.FC = () => {
  const [file, setFile] = useState([]);
  const theme = useTheme();

  return (
    <Box>
      <Stack
        direction="row"
        gap={3}
        alignItems="center"
        sx={{ marginBottom: "20px" }}
      >
        <Button>Simpan</Button>
        <Link to="/admin/courses">
          <Button variant="outlined">Batal</Button>
        </Link>
      </Stack>
      <Grid container gap={3} wrap="wrap">
        <Grid item md={5.5}>
          <FilePond
            files={file}
            allowMultiple={false}
            name="files"
            imagePreviewHeight={400}
            labelIdle={`<div><p>Drag & Drop your files or </p> <span class="filepond--label-action">Browse</span></div>`}
          />
        </Grid>
        <Grid item md={5.5}>
          <div
            style={{
              background: theme.palette.background.paper,
              padding: "30px",
              borderRadius: "6px",
            }}
          >
            <form>
              <Stack direction={"column"} gap={2}>
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
            </form>
          </div>
        </Grid>
        <Grid item md={11}>
          <DescriptionEditor />
          <Stack
            direction="row"
            justifyContent={"flex-end"}
            sx={{ marginTop: "20px" }}
            gap={3}
          >
            <Button>Simpan</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Create;
