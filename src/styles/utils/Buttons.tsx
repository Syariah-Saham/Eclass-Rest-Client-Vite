import { Button, Fab, IconButton, Stack } from "@mui/material";
import React from "react";
import LoadingIndicator from "../../components/LoadingIndicator";
import { StyleGuideMainSection, StyleGuideSection } from "./StyleGuide";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Delete } from "@mui/icons-material";

const Buttons: React.FC = () => {
  return (
    <StyleGuideMainSection>
      <StyleGuideSection title="Button Primary">
        <Stack direction="row" alignItems={"center"} spacing={3}>
          <Button>Button</Button>
          <Button disabled>Button</Button>
          <Button disabled>
            <LoadingIndicator />
          </Button>
          <Button size="large">Button</Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Button startIcon={<AddIcon />}>Button</Button>
          <Button startIcon={<AddIcon />} disabled>
            Button
          </Button>
          <Button disabled className="loading" startIcon={<AddIcon />}>
            <LoadingIndicator />
          </Button>
          <Button startIcon={<AddIcon />} size="large">
            Button
          </Button>
        </Stack>
      </StyleGuideSection>
      <StyleGuideSection title="Button Secondary">
        <Stack direction="row" alignItems={"center"} spacing={3}>
          <Button color="secondary">Button</Button>
          <Button color="secondary" disabled>
            Button
          </Button>
          <Button color="secondary" disabled>
            <LoadingIndicator />
          </Button>
          <Button color="secondary" size="large">
            Button
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Button color="secondary" startIcon={<AddIcon />}>
            Button
          </Button>
          <Button color="secondary" startIcon={<AddIcon />} disabled>
            Button
          </Button>
          <Button
            color="secondary"
            disabled
            className="loading"
            startIcon={<AddIcon />}
          >
            <LoadingIndicator />
          </Button>
          <Button color="secondary" startIcon={<AddIcon />} size="large">
            Button
          </Button>
        </Stack>
      </StyleGuideSection>
      <StyleGuideSection title="Button Error">
        <Stack direction="row" alignItems={"center"} spacing={3}>
          <Button color="error">Button</Button>
          <Button color="error" disabled>
            Button
          </Button>
          <Button color="error" disabled>
            <LoadingIndicator />
          </Button>
          <Button color="error" size="large">
            Button
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Button color="error" startIcon={<AddIcon />}>
            Button
          </Button>
          <Button color="error" startIcon={<AddIcon />} disabled>
            Button
          </Button>
          <Button
            color="error"
            disabled
            className="loading"
            startIcon={<AddIcon />}
          >
            <LoadingIndicator />
          </Button>
          <Button color="error" startIcon={<AddIcon />} size="large">
            Button
          </Button>
        </Stack>
      </StyleGuideSection>
      <StyleGuideSection title="Button Success">
        <Stack direction="row" alignItems={"center"} spacing={3}>
          <Button color="success">Button</Button>
          <Button color="success" disabled>
            Button
          </Button>
          <Button color="success" disabled>
            <LoadingIndicator />
          </Button>
          <Button color="success" size="large">
            Button
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Button color="success" startIcon={<AddIcon />}>
            Button
          </Button>
          <Button color="success" startIcon={<AddIcon />} disabled>
            Button
          </Button>
          <Button
            color="success"
            disabled
            className="loading"
            startIcon={<AddIcon />}
          >
            <LoadingIndicator />
          </Button>
          <Button color="success" startIcon={<AddIcon />} size="large">
            Button
          </Button>
        </Stack>
      </StyleGuideSection>
      <StyleGuideSection title="Button Text">
        <Stack direction="row" alignItems={"center"} spacing={3}>
          <Button variant="text">Button</Button>
          <Button variant="text" disabled>
            Button
          </Button>
          <Button variant="text" disabled>
            <LoadingIndicator />
          </Button>
          <Button variant="text" size="large">
            Button
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Button variant="text" startIcon={<AddIcon />}>
            Button
          </Button>
          <Button variant="text" startIcon={<AddIcon />} disabled>
            Button
          </Button>
          <Button
            variant="text"
            disabled
            className="loading"
            startIcon={<AddIcon />}
          >
            <LoadingIndicator />
          </Button>
          <Button variant="text" startIcon={<AddIcon />} size="large">
            Button
          </Button>
        </Stack>
        <Stack direction="row" alignItems={"center"} spacing={3}>
          <Button variant="text" color="secondary">
            Button
          </Button>
          <Button variant="text" color="secondary" disabled>
            Button
          </Button>
          <Button variant="text" color="secondary" disabled>
            <LoadingIndicator />
          </Button>
          <Button variant="text" color="secondary" size="large">
            Button
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Button variant="text" color="secondary" startIcon={<AddIcon />}>
            Button
          </Button>
          <Button
            variant="text"
            color="secondary"
            startIcon={<AddIcon />}
            disabled
          >
            Button
          </Button>
          <Button
            variant="text"
            color="secondary"
            disabled
            className="loading"
            startIcon={<AddIcon />}
          >
            <LoadingIndicator />
          </Button>
          <Button
            variant="text"
            color="secondary"
            startIcon={<AddIcon />}
            size="large"
          >
            Button
          </Button>
        </Stack>
      </StyleGuideSection>
      <StyleGuideSection title="Button Outline">
        <Stack direction="row" alignItems={"center"} spacing={3}>
          <Button variant="outlined">Button</Button>
          <Button variant="outlined" disabled>
            Button
          </Button>
          <Button variant="outlined" disabled>
            <LoadingIndicator />
          </Button>
          <Button variant="outlined" size="large">
            Button
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Button variant="outlined" startIcon={<AddIcon />}>
            Button
          </Button>
          <Button variant="outlined" startIcon={<AddIcon />} disabled>
            Button
          </Button>
          <Button
            variant="outlined"
            disabled
            className="loading"
            startIcon={<AddIcon />}
          >
            <LoadingIndicator />
          </Button>
          <Button variant="outlined" startIcon={<AddIcon />} size="large">
            Button
          </Button>
        </Stack>
        <Stack direction="row" alignItems={"center"} spacing={3}>
          <Button variant="outlined" color="secondary">
            Button
          </Button>
          <Button variant="outlined" color="secondary" disabled>
            Button
          </Button>
          <Button variant="outlined" color="secondary" disabled>
            <LoadingIndicator />
          </Button>
          <Button variant="outlined" color="secondary" size="large">
            Button
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Button variant="outlined" color="secondary" startIcon={<AddIcon />}>
            Button
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AddIcon />}
            disabled
          >
            Button
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            disabled
            className="loading"
            startIcon={<AddIcon />}
          >
            <LoadingIndicator />
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AddIcon />}
            size="large"
          >
            Button
          </Button>
        </Stack>
      </StyleGuideSection>
      <StyleGuideSection title="Button Icon">
        <Stack direction="row" alignItems="center" spacing={3}>
          <IconButton color="error">
            <Delete />
          </IconButton>
          <IconButton color="error">
            <DeleteOutlineOutlinedIcon />
          </IconButton>
          <Fab color="error">
            <Delete />
          </Fab>
          <Fab color="error">
            <DeleteOutlineOutlinedIcon />
          </Fab>
        </Stack>
      </StyleGuideSection>
    </StyleGuideMainSection>
  );
};

export default Buttons;
