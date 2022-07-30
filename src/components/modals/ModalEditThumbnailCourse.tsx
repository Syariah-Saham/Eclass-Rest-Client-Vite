import { Box, Button, Card, Fade, Modal, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import LoadingIndicator from "../LoadingIndicator";
import { FilePond } from "react-filepond";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { openSnackbar } from "../../redux/actions/snackbar";
import { updateThumbnailCourse } from "../../services/courses";

interface IProps {
  show: boolean;
  onClose: () => void;
  rowId: number;
}
const ModalEditThumbnailCourse: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<any[]>([]);

  const { handleSubmit, setValue } = useForm<{ thumbnail: Blob }>({
    mode: "onChange",
  });

  useEffect(() => {
    setValue("thumbnail", file[0]?.file);
  }, [file]);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      await updateThumbnailCourse({
        id: props.rowId,
        thumbnail: data.thumbnail,
      });
      props.onClose();
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Update thumbnail successfully",
        })
      );
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    } finally {
      setLoading(false);
    }
  });

  return ReactDOM.createPortal(
    <Modal open={props.show}>
      <Fade in={props.show}>
        <Card sx={{ outline: "none", padding: "30px", width: "50%" }}>
          <form onSubmit={onSubmit}>
            <Box>
              <FilePond
                files={file}
                onupdatefiles={(val) => setFile(val)}
                allowMultiple={false}
                name="files"
                imagePreviewHeight={400}
                labelIdle={`<div><p>Drag & Drop your files or </p> <span class="filepond--label-action">Browse</span></div>`}
              />
            </Box>
            <Stack
              direction="row"
              justifyContent={"center"}
              sx={{ marginTop: "90px" }}
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

export default ModalEditThumbnailCourse;
