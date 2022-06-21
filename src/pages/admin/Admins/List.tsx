import { DeleteRounded, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Skeleton,
  Input,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IGetAdminsResponse } from "../../../interfaces/api/admin/admins";
import { defaultValuePagination } from "../../../interfaces/pagination";
import {
  deleteAdmin,
  getAdminByName,
  getAdmins,
} from "../../../services/admins";
import moment from "moment";
import ModalDelete from "../../../components/modals/ModalDelete";
import { useForm } from "react-hook-form";

const SkeletonTable = () => {
  const tmpResult = [];
  for (let i = 0; i <= 5; i++) {
    tmpResult.push(
      <TableRow key={i}>
        <TableCell>
          <Skeleton variant="circular" width={40} height={40} />
        </TableCell>
        <TableCell>
          <Skeleton variant="text" />
        </TableCell>
        <TableCell>
          <Skeleton variant="text" />
        </TableCell>
        <TableCell>
          <Skeleton variant="text" />
        </TableCell>
        <TableCell align="center">
          <Skeleton variant="circular" width={40} height={40} />
        </TableCell>
      </TableRow>
    );
  }
  return <>{tmpResult}</>;
};

const List: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [admins, setAdmins] = useState<IGetAdminsResponse>({
    admins: defaultValuePagination,
  });
  const { register, handleSubmit, reset } = useForm<{ name: string }>({
    defaultValues: {
      name: "",
    },
  });

  const [modalDelete, setModalDelete] = useState({
    show: false,
    onClose: () => {
      setModalDelete({ ...modalDelete, show: false });
    },
    onDelete: () => {},
  });

  const getListAdmins = async () => {
    try {
      const response = await getAdmins();
      const admins = response.data.admins.data.map((admin) => {
        return {
          ...admin,
          created_at: moment(admin.created_at).format("DD-MM-YYYY"),
        };
      });
      setAdmins({
        ...response.data,
        admins: { ...response.data.admins, data: admins },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getListAdmins();
  }, []);

  const onSubmitSearch = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const response = await getAdminByName(data);
      const result = response.data.admins;
      setAdmins({ ...admins, admins: { ...admins.admins, data: result } });
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });

  const handleDelete = (id: number) => {
    setModalDelete({
      ...modalDelete,
      show: true,
      onDelete: async () => {
        try {
          await deleteAdmin({ id });
          getListAdmins();
        } catch (error) {
          console.log(error);
        }
      },
    });
  };

  return (
    <Box>
      <Link to="/admin/admins/create">
        <Button>Tambah Admin</Button>
      </Link>
      <Box sx={{ marginTop: "20px" }}>
        <form onSubmit={onSubmitSearch}>
          <Stack
            direction="row"
            alignItems="center"
            gap={2}
            sx={{ marginBottom: "20px" }}
          >
            <Input
              placeholder="Cari"
              {...register("name")}
              sx={{
                width: "250px",
                boxSizing: "border-box",
                paddingRight: "50px",
              }}
            />
            <IconButton
              disabled={loading}
              type="submit"
              color="secondary"
              sx={{ transform: "translate(-65px)" }}
            >
              <Search />
            </IconButton>
          </Stack>
        </form>
        <TableContainer sx={{ width: "70%" }} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" width={"25px"} className="tcell-head">
                  #
                </TableCell>
                <TableCell className="tcell-head">Nama</TableCell>
                <TableCell className="tcell-head">Email</TableCell>
                <TableCell className="tcell-head">Bergabung</TableCell>
                <TableCell align="center" className="tcell-head">
                  Aksi
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!loading ? (
                admins.admins.data.map((admin, i) => (
                  <TableRow key={admin.id}>
                    <TableCell align="center">{i + 1}</TableCell>
                    <TableCell>{admin.name}</TableCell>
                    <TableCell>{admin.email}</TableCell>
                    <TableCell>{admin.created_at}</TableCell>
                    <TableCell align="center">
                      {admin.email !== "admin@mail.com" &&
                        admin.email !== "admin@syariahsaham.id" && (
                          <IconButton
                            onClick={handleDelete.bind(null, admin.id)}
                            color="error"
                          >
                            <DeleteRounded />
                          </IconButton>
                        )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <SkeletonTable />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <ModalDelete
        show={modalDelete.show}
        onClose={modalDelete.onClose}
        onDelete={modalDelete.onDelete}
      />
    </Box>
  );
};

export default List;
