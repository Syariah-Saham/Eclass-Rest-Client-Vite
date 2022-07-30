import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModalDelete from "../../../../components/modals/ModalDelete";
import { openSnackbar } from "../../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../../redux/hooks";
import { deleteLesson } from "../../../../services/lessons";

const Navigation: React.FC<{ openModalEdit: () => void }> = ({
  openModalEdit,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { lessonId, id } = useParams();
  const [modalDelete, setModalDelete] = useState({
    show: false,
    onClose: () => {
      setModalDelete({ ...modalDelete, show: false });
    },
    onDelete: () => {},
  });

  const handleDelete = async () => {
    setModalDelete({
      ...modalDelete,
      show: true,
      onDelete: async () => {
        try {
          await deleteLesson({ id: parseInt(lessonId!) });
          navigate(`/admin/courses/${id}`);
        } catch (error: any) {
          dispatch(
            openSnackbar({
              severity: "error",
              message: error?.message,
            })
          );
        } finally {
        }
      },
    });
  };

  return (
    <>
      <Stack direction={"row"} gap={3} sx={{ marginBottom: "30px" }}>
        <Button color="success" onClick={openModalEdit}>
          Edit
        </Button>
        <Button color="error" onClick={handleDelete}>
          Hapus
        </Button>
      </Stack>
      <ModalDelete
        show={modalDelete.show}
        onClose={modalDelete.onClose}
        onDelete={modalDelete.onDelete}
      />
    </>
  );
};

export default Navigation;
