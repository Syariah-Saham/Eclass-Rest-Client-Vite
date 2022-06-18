import React from "react";
import { StyleGuideMainSection, StyleGuideSection } from "./StyleGuide";
import { Stack } from "@mui/material";
import Input from "../../components/Input";
import InputLabel from "../../components/InputLabel";
import SelectLabel from "../../components/SelectLabel";

const mockOptions = [
  { label: "Option 1", value: "Option 1" },
  { label: "Option 2", value: "Option 2" },
  { label: "Option 3", value: "Option 3" },
  { label: "Option 4", value: "Option 4" },
  { label: "Option 5", value: "Option 5" },
  { label: "Option 6", value: "Option 6" },
  { label: "Option 7", value: "Option 7" },
  { label: "Option 8", value: "Option 8" },
  { label: "Option 9", value: "Option 9" },
  { label: "Option 10", value: "Option 10" },
];

const Forms: React.FC = () => {
  return (
    <StyleGuideMainSection>
      <StyleGuideSection title="Input Default">
        <Stack direction="row" alignItems={"center"} spacing={3}>
          <Input />
          <Input disabled />
          <Input value="This is value" />
          <Input disabled value="This is value" />
        </Stack>
      </StyleGuideSection>
      <StyleGuideSection title="Input Error">
        <Stack direction="row" alignItems={"center"} spacing={3}>
          <Input error />
          <Input error disabled />
          <Input error value="This is value" />
          <Input error disabled value="This is value" />
        </Stack>
      </StyleGuideSection>
      <StyleGuideSection title="Input Label">
        <Stack direction="row" alignItems={"center"} spacing={3}>
          <InputLabel label="Input Label" />
          <InputLabel label="Input Label" inputProps={{ disabled: true }} />
          <InputLabel
            error
            helperText="This is an error"
            label="Input Label"
            inputProps={{ value: "This is value" }}
          />
          <InputLabel
            error
            helperText="This is an error"
            label="Input Label"
            inputProps={{ disabled: true, value: "This is value" }}
          />
        </Stack>
      </StyleGuideSection>
      <StyleGuideSection title="React Select">
        <Stack direction="row" alignItems={"center"} spacing={3}>
          <SelectLabel
            label="Select Label 1"
            selectProps={{
              placeholder: "Select Label 1",
              options: mockOptions,
            }}
          />
          <SelectLabel
            label="Select Label 2"
            selectProps={{
              placeholder: "Select Label 2",
              isDisabled: true,
              options: mockOptions,
            }}
          />
          <SelectLabel
            error
            helperText="This is an error"
            label="Select Label 3"
            selectProps={{
              placeholder: "Select Label 3",
              options: mockOptions,
              value: mockOptions[0],
              error: true,
            }}
          />
          <SelectLabel
            error
            helperText="This is an error"
            label="Select Label 4"
            selectProps={{
              placeholder: "Select Label 4",
              isDisabled: true,
              value: mockOptions[0],
              options: mockOptions,
            }}
          />
        </Stack>
      </StyleGuideSection>
    </StyleGuideMainSection>
  );
};

export default Forms;
