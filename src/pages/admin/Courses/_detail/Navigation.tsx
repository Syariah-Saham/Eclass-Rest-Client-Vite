import { Stack, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingIndicator from "../../../../components/LoadingIndicator";
import ModalDelete from "../../../../components/modals/ModalDelete";
import { openSnackbar } from "../../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../../redux/hooks";
import { deleteCourse, toggleStatusCourse } from "../../../../services/courses";

const Navigation: React.FC<{ status?: number }> = ({ status }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [statusCourse, setStatusCourse] = useState<
    number | boolean | undefined
  >(0);
  const [loadingToggle, setLoadingToggle] = useState(false);
  const [modalDelete, setModalDelete] = useState({
    show: false,
    onClose: () => {
      setModalDelete({ ...modalDelete, show: false });
    },
    onDelete: () => {},
  });

  useEffect(() => {
    setStatusCourse(status);
  }, [status]);

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

  const handleToggleStatus = async () => {
    setLoadingToggle(true);
    try {
      await toggleStatusCourse({ id: parseInt(id as string) });
      console.log(status, statusCourse);
      setStatusCourse(!statusCourse);
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Updated status successfully",
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
      setLoadingToggle(false);
    }
  };

  return (
    <>
      <Stack direction="row" gap={3} sx={{ marginBottom: "30px" }}>
        <Button color="success">Edit</Button>
        <Button color="error" onClick={handleDelete.bind(null, id)}>
          Hapus
        </Button>
        <Button
          color={!statusCourse ? "secondary" : "warning"}
          disabled={loadingToggle}
          onClick={handleToggleStatus.bind(null, id)}
        >
          {loadingToggle ? (
            <LoadingIndicator />
          ) : statusCourse ? (
            "Private"
          ) : (
            "Publish"
          )}
        </Button>
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
