import { Box, Button, Card, Fade, Modal, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { IUpdatePhotoForm } from "../../interfaces/forms/profile";
import { IUser } from "../../interfaces/user-model";
import { openSnackbar } from "../../redux/actions/snackbar";
import { useAppDispatch } from "../../redux/hooks";
import { updatePhoto } from "../../services/user";
import { FilePond } from "react-filepond";
import LoadingIndicator from "../LoadingIndicator";

interface IProps {
  user: IUser | null;
  show: boolean;
  close: () => void;
}
const ModalEditPhotoMentor: React.FC<IProps> = ({ user, show, close }) => {
  const [file, setFile] = useState<any[]>([]);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, setValue } = useForm<IUpdatePhotoForm>({
    mode: "onChange",
    defaultValues: {
      id: user?.id,
    },
  });

  useEffect(() => {
    if (user) {
      setValue("id", user.id);
    }
  }, [user]);

  useEffect(() => {
    setValue("photo", file[0]?.file);
  }, [file]);

  const onSubmit = handleSubmit(async (data: IUpdatePhotoForm) => {
    setLoading(true);
    try {
      await updatePhoto(data);
      close();
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Update mentor photo successfully",
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
    <Modal open={show}>
      <Fade in={show}>
        <Card>
          <Stack direction="column" gap={4} sx={{ width: "400px" }}>
            <form onSubmit={onSubmit}>
              <Box>
                <FilePond
                  files={file}
                  onupdatefiles={(val) => setFile(val)}
                  allowMultiple={false}
                  name="photo"
                  stylePanelLayout={"compact circle"}
                  imagePreviewHeight={400}
                  labelIdle={`<div><p>Drag & Drop your files or </p> <span class="filepond--label-action">Browse</span></div>`}
                />
              </Box>

              <Box sx={{ textAlign: "center" }}>
                <Button type="submit" disabled={loading} color="primary">
                  {loading ? <LoadingIndicator /> : "Upload"}
                </Button>
              </Box>
            </form>
          </Stack>
        </Card>
      </Fade>
    </Modal>,
    document.getElementById("modal-root") as Element
  );
};

export default ModalEditPhotoMentor;
