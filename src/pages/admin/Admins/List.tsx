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
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteAdmin,
  getAdminByName,
  getAdmins,
} from "../../../services/admins";
import moment from "moment";
import ModalDelete from "../../../components/modals/ModalDelete";
import { useForm } from "react-hook-form";
import { IUser } from "../../../interfaces/user-model";
import { sliceIntoChunks } from "../../../helpers/chunk-array";
import { numColTable } from "../../../helpers/numColTable";
import { IPage } from "../../../interfaces/state/page";

const SkeletonTable = () => {
  const tmpResult = [];
  for (let i = 1; i <= 10; i++) {
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
  const [page, setPage] = useState<IPage>({
    currentPage: 1,
    totalPage: 1,
    perPage: 10,
  });
  const [admins, setAdmins] = useState<IUser[][]>([]);
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
      let admins = response.data.admins.map((admin) => {
        return {
          ...admin,
          created_at: moment(admin.created_at).format("DD-MM-YYYY"),
        };
      });
      let tmpData = sliceIntoChunks(admins, page.perPage);
      setAdmins(tmpData);
      setPage({ ...page, totalPage: tmpData.length });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getListAdmins();
  }, []);

  useEffect(() => {
    if (!admins[page.currentPage - 1]) {
      setPage({ ...page, currentPage: page.currentPage - 1 });
    }
  }, [admins]);

  const onSubmitSearch = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const response = await getAdminByName(data);
      setAdmins([response.data.admins]);
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

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage({ ...page, currentPage: value });
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
        <TableContainer
          sx={{ width: "70%", marginBottom: "20px" }}
          component={Paper}
        >
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
                admins[page.currentPage - 1]?.map((admin, i) => (
                  <TableRow key={admin.id}>
                    <TableCell align="center">
                      {numColTable(page.perPage, page.currentPage, i)}
                    </TableCell>
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
        <Pagination
          count={page.totalPage}
          variant={"outlined"}
          onChange={handleChangePage}
        />
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
