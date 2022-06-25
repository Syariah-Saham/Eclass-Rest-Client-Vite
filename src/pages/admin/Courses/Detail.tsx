import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import StarIcon from "../../../assets/icons/star.svg";
import MDEditor from "@uiw/react-md-editor";
import ModalAddLesson from "./ModalAddLesson";

const Rating: React.FC = () => {
  return (
    <Stack direction="row" alignItems="center">
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
    </Stack>
  );
};

interface ILessonItemProps {
  order: number;
}
const LessonItem: React.FC<ILessonItemProps> = (props) => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center">
      <Box
        sx={{
          width: "50px",
          height: "50px",
          backgroundColor: theme.palette.background.default,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          position: "absolute",
        }}
      >
        <Typography variant="h5">{props.order}</Typography>
      </Box>
      <Typography
        sx={{
          width: "100%",
          marginLeft: "12px",
          paddingLeft: "55px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
        quas?
      </Typography>
    </Stack>
  );
};

const DescriptionMarkdown = () => {
  const mkdStr = `# Dillinger
## _The Last Markdown Editor, Ever_


Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Features

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF`;

  return (
    <Card>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ marginBottom: "10px" }}
      >
        <Typography variant="h5">Deskripsi</Typography>
        <Button color="success">Edit</Button>
      </Stack>
      <Box>
        <div data-color-mode="dark" className="wmde-markdown-var">
          <MDEditor.Markdown style={{ padding: 15 }} source={mkdStr} />
        </div>
      </Box>
    </Card>
  );
};

const Detail: React.FC = () => {
  const [modalAdd, setModalAdd] = useState({
    show: false,
    onClose: () => setModalAdd({ ...modalAdd, show: false }),
  });

  return (
    <Box>
      <Stack direction="row" gap={3} sx={{ marginBottom: "30px" }}>
        <Button color="success">Edit</Button>
        <Button color="error">Hapus</Button>
        <Button color="secondary">Publish</Button>
        <Button color="warning">Ujian</Button>
      </Stack>
      <Grid container gap={3} wrap="wrap">
        <Grid item md={4}>
          <Card
            sx={{
              padding: 0,
              display: "flex",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={
                "https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg"
              }
              style={{ width: "100%" }}
              alt="course thumbnail"
            />
          </Card>
        </Grid>
        <Grid item md={5}>
          <Card>
            <Stack direction="column" gap={2}>
              <Box>
                <Typography variant="h6">Judul</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores, culpa!
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">Harga</Typography>
                <Typography>Rp1.000.000,00</Typography>
              </Box>
              <Box>
                <Typography variant="h6">Rating</Typography>
                <Typography>
                  <Rating />
                </Typography>
              </Box>
              <Stack direction="row">
                <Box sx={{ width: "50%" }}>
                  <Typography variant="h6">Status</Typography>
                  <Typography>published</Typography>
                </Box>
                <Box sx={{ width: "50%" }}>
                  <Typography variant="h6">Level</Typography>
                  <Typography>pemula</Typography>
                </Box>
              </Stack>
            </Stack>
          </Card>
        </Grid>
        <Grid item md={2.5}>
          <Stack direction="column" alignItems="center" gap={2}>
            <Avatar
              alt="User 1"
              src="https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?t=st=1656161411~exp=1656162011~hmac=aebaab7283e48b7380c3ec69824743876246b86f38e91bcef2e755fcc91f2e8a&w=826"
              sx={{ height: "200px", width: "200px" }}
            />
            <Typography>Mentor Pengajar</Typography>
            <Typography variant="h4">Mentor Pengajar</Typography>
          </Stack>
        </Grid>
        <Grid item md={4}>
          <Card>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ marginBottom: "15px" }}
            >
              <Typography variant="h5">Materi</Typography>
              <Button
                color="secondary"
                onClick={() => setModalAdd({ ...modalAdd, show: true })}
              >
                Tambah
              </Button>
            </Stack>
            <Stack direction="column" gap={2} alignItems="center">
              <LessonItem order={1} />
              <LessonItem order={2} />
              <LessonItem order={3} />
              <LessonItem order={4} />
              <LessonItem order={5} />
              <LessonItem order={6} />
              <LessonItem order={7} />
            </Stack>
          </Card>
        </Grid>
        <Grid item md={7.5}>
          <DescriptionMarkdown />
        </Grid>
      </Grid>
      <ModalAddLesson show={modalAdd.show} onClose={modalAdd.onClose} />
    </Box>
  );
};

export default Detail;
