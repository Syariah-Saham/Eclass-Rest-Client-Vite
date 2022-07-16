import { Stack, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModalDelete from "../../../../components/modals/ModalDelete";
import { openSnackbar } from "../../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../../redux/hooks";
import { deleteCourse } from "../../../../services/courses";

const Navigation: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
          await deleteCourse({ id: parseInt(id as string) });
          dispatch(
            openSnackbar({
              severity: "success",
              message: "Delete course successfully",
            })
          );
          navigate("/admin/courses");
        } catch (error: any) {
          dispatch(
            openSnackbar({
              severity: "error",
              message: error?.message,
            })
          );
        }
      },
    });
  };

  return (
    <>
      <Stack direction="row" gap={3} sx={{ marginBottom: "30px" }}>
        <Button color="success">Edit</Button>
        <Button color="error" onClick={handleDelete.bind(null, id)}>
          Hapus
        </Button>
        <Button color="secondary">Publish</Button>
        <Button color="warning">Ujian</Button>
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
