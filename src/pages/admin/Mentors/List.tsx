import { DeleteRounded, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Pagination,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import ModalDelete from "../../../components/modals/ModalDelete";
import { sliceIntoChunks } from "../../../helpers/chunk-array";
import { numColTable } from "../../../helpers/numColTable";
import { IUser } from "../../../interfaces/user-model";
import {
  deleteMentor,
  getMentorByName,
  getMentors,
} from "../../../services/mentors";

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
  const [page, setPage] = useState<{
    currentPage: number;
    totalPage: number;
    perPage: number;
  }>({
    currentPage: 1,
    totalPage: 1,
    perPage: 10,
  });
  const [mentors, setMentors] = useState<IUser[][]>([]);
  const { handleSubmit, reset, control } = useForm<{ name: string }>({
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

  const getListMentors = async () => {
    try {
      const response = await getMentors();
      const mentors = response.data.mentors.map((mentor) => {
        return {
          ...mentor,
          created_at: moment(mentor.created_at).format("DD-MM-YYYY"),
        };
      });
      const tmpData = sliceIntoChunks(mentors, page.perPage);
      setMentors(tmpData);
      setPage({ ...page, totalPage: tmpData.length });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getListMentors();
  }, []);

  useEffect(() => {
    if (!mentors[page.currentPage - 1]) {
      setPage({ ...page, currentPage: page.currentPage - 1 });
    }
  }, [mentors]);

  const onSubmitSearch = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const response = await getMentorByName(data);
      setMentors([response.data.mentors]);
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
          await deleteMentor({ id });
          getListMentors();
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
      <Link to="/admin/mentors/create">
        <Button>Tambah Mentor</Button>
      </Link>
      <Box sx={{ marginTop: "20px" }}>
        <form onSubmit={onSubmitSearch}>
          <Stack
            direction="row"
            alignItems={"center"}
            gap={2}
            sx={{ marginBottom: "20px", width: "300px" }}
          >
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Cari"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  sx={{
                    width: "250px",
                    boxSizing: "border-box",
                    paddingRight: "50px",
                  }}
                />
              )}
            />
            <IconButton
              disabled={loading}
              type="submit"
              color="secondary"
              sx={{ transform: "translate(-65px)" }}
            >
              {" "}
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
                <TableCell className="tcell-head" align="center">
                  Aksi
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!loading ? (
                mentors[page.currentPage - 1]?.map((mentor, i) => (
                  <TableRow key={mentor.id}>
                    <TableCell align="center">
                      {numColTable(page.perPage, page.currentPage, i)}
                    </TableCell>
                    <TableCell>{mentor.name}</TableCell>
                    <TableCell>{mentor.email}</TableCell>
                    <TableCell>{mentor.created_at}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="error"
                        onClick={handleDelete.bind(null, mentor.id)}
                      >
                        <DeleteRounded />
                      </IconButton>
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
          variant="outlined"
          onChange={handleChangePage}
        />

        <ModalDelete
          show={modalDelete.show}
          onClose={modalDelete.onClose}
          onDelete={modalDelete.onDelete}
        />
      </Box>
    </Box>
  );
};

export default List;
