import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Fade, Modal, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import { Controller, useForm } from "react-hook-form";
import { IUpdateMentorForm } from "../../interfaces/forms/admin/mentors";
import { IUser } from "../../interfaces/user-model";
import { openSnackbar } from "../../redux/actions/snackbar";
import { useAppDispatch } from "../../redux/hooks";
import { updateMentor } from "../../services/mentors";
import { updateMentorValidation } from "../../validations/admin/mentor-form";
import InputLabel from "../InputLabel";
import LoadingIndicator from "../LoadingIndicator";

interface IProps {
  user: IUser | null;
  show: boolean;
  close: () => void;
}
const ModalEditMentor: React.FC<IProps> = ({ user, show, close }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<IUpdateMentorForm>({
    mode: "onChange",
    resolver: yupResolver(updateMentorValidation),
    defaultValues: {
      id: user?.id,
      name: user?.name,
      occupation: user?.occupation,
      short_profile: user?.short_profile,
    },
  });

  useEffect(() => {
    if (user) {
      setValue("id", user.id);
      setValue("name", user.name);
      setValue("occupation", user.occupation!);
      setValue("short_profile", user.short_profile!);
    }
  }, [user]);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      await updateMentor(data);

      close();
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Updated mentor successfully",
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
    <Modal open={show} onClose={close}>
      <Fade in={show}>
        <Card sx={{ outline: "none", padding: "30px", width: "40%" }}>
          <form onSubmit={onSubmit}>
            <Stack direction="column" gap={2}>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <InputLabel
                    label="Nama"
                    error={!!errors?.name}
                    helperText={errors?.name?.message}
                    inputProps={{
                      type: "text",
                      placeholder: "Nama",
                      onChange: (e) => onChange(e.target.value),
                      value: value,
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="occupation"
                render={({ field: { onChange, value } }) => (
                  <InputLabel
                    label="Pekerjaan"
                    error={!!errors?.occupation}
                    helperText={errors?.occupation?.message}
                    inputProps={{
                      type: "text",
                      placeholder: "Pekerjaan",
                      onChange: (e) => onChange(e.target.value),
                      value: value,
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name="short_profile"
                render={({ field: { onChange, value } }) => (
                  <InputLabel
                    label="Profil singkat"
                    error={!!errors?.short_profile}
                    helperText={errors.short_profile?.message}
                    inputProps={{
                      type: "password",
                      multiline: true,
                      placeholder: "Profil singkat",
                      onChange: (e) => onChange(e.target.value),
                      value: value,
                    }}
                  />
                )}
              />
              <Stack direction="row" justifyContent="center">
                <Button color="secondary" type="submit" disabled={loading}>
                  {!loading ? "Submit" : <LoadingIndicator />}
                </Button>
              </Stack>
            </Stack>
          </form>
        </Card>
      </Fade>
    </Modal>,
    document.getElementById("modal-root") as Element
  );
};

export default ModalEditMentor;
