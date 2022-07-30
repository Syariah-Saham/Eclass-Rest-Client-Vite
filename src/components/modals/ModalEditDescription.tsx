import { Button, Card, Fade, Modal, Stack } from "@mui/material";
import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import MDEditor from "@uiw/react-md-editor";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateDescriptionForm } from "../../validations/admin/description-form";
import { IUpdateDescriptionForm } from "../../interfaces/forms/admin/courses";
import { useAppDispatch } from "../../redux/hooks";
import { openSnackbar } from "../../redux/actions/snackbar";
import LoadingIndicator from "../LoadingIndicator";
import { updateDescriptionCourse } from "../../services/courses";

interface IProps {
  show: boolean;
  onClose: () => void;
  onUpdate: (description: string) => void;
  value: string;
  type: "course" | "lesson";
  rowId: number;
}
const ModalEditDescription: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm<IUpdateDescriptionForm>({
    mode: "onChange",
    resolver: yupResolver(updateDescriptionForm),
    defaultValues: {
      description: props.value,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      switch (props.type) {
        case "course":
          const response = await updateDescriptionCourse({
            id: props.rowId,
            description: data.description,
          });
          console.log(response.data);
          break;
      }
      props.onClose();
      props.onUpdate(data.description);
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Updated data successfully",
        })
      );
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.messge,
        })
      );
    } finally {
      setLoading(false);
    }
  });

  return ReactDOM.createPortal(
    <Modal open={props.show}>
      <Fade in={props.show}>
        <Card sx={{ outline: "none", padding: "30px" }}>
          <form onSubmit={onSubmit}>
            <Controller
              control={control}
              name="description"
              render={({ field: { onChange, value } }) => (
                <MDEditor
                  height={600}
                  value={value}
                  onChange={(val) => onChange(val)}
                />
              )}
            />
            <Stack
              direction="row"
              justifyContent={"center"}
              sx={{ marginTop: "30px" }}
              gap={5}
            >
              <Button
                color="secondary"
                variant="outlined"
                onClick={props.onClose}
                type="button"
              >
                Batal
              </Button>
              <Button color="secondary" type="submit" disabled={loading}>
                {loading ? <LoadingIndicator /> : "Submit"}
              </Button>
            </Stack>
          </form>
        </Card>
      </Fade>
    </Modal>,
    document.getElementById("modal-root") as Element
  );
};

export default ModalEditDescription;
