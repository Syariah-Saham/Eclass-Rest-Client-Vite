import React, { useEffect, useState } from "react";
import { IUser } from "../../../interfaces/user-model";
import {
  deleteMember,
  getMemberByName,
  getMembers,
} from "../../../services/members";
import moment from "moment";
import { sliceIntoChunks } from "../../../helpers/chunk-array";
import {
  Box,
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
import { numColTable } from "../../../helpers/numColTable";
import { DeleteRounded, Search } from "@mui/icons-material";
import ModalDelete from "../../../components/modals/ModalDelete";
import { Controller, useForm } from "react-hook-form";
import Input from "../../../components/Input";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

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
  const [members, setMembers] = useState<IUser[][]>([]);
  const [modalDelete, setModalDelete] = useState({
    show: false,
    onClose: () => {
      setModalDelete({ ...modalDelete, show: false });
    },
    onDelete: () => {},
  });

  const { register, handleSubmit, reset, watch, control } = useForm<{
    name: string;
  }>({
    defaultValues: {
      name: "",
    },
  });

  const getListMembers = async () => {
    try {
      const response = await getMembers();
      const members = response.data.members.map((member) => {
        return {
          ...member,
          created_at: moment(member.created_at).format("DD-MM-YYYY"),
        };
      });
      const tmpData = sliceIntoChunks(members, page.perPage);
      setMembers(tmpData);
      setPage({ ...page, totalPage: tmpData.length });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getListMembers();
  }, []);

  useEffect(() => {
    if (!members[page.currentPage - 1]) {
      setPage({ ...page, currentPage: page.currentPage - 1 });
    }
  }, [members]);

  const onSubmitSearch = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const response = await getMemberByName(data);
      setMembers([response.data.members]);
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
          await deleteMember({ id });
          getListMembers();
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
      <Box sx={{ marginTop: "20px" }}>
        <form onSubmit={onSubmitSearch}>
          <Stack
            direction="row"
            alignItems="center"
            gap={2}
            sx={{ marginBottom: "20px", width: "300px" }}
          >
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Cari"
                  sx={{
                    width: "250px",
                    boxSizing: "border-box",
                    paddingRight: "50px",
                  }}
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                />
              )}
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
                <TableCell className="tcell-head" align="center">
                  Aksi
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!loading ? (
                members[page.currentPage - 1]?.map((member, i) => (
                  <TableRow key={member.id}>
                    <TableCell align="center">
                      {numColTable(page.perPage, page.currentPage, i)}
                    </TableCell>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>{member.created_at}</TableCell>
                    <TableCell align="center">
                      <Link to={`/admin/members/${member.id}`}>
                        <IconButton color="info">
                          <InfoIcon />
                        </IconButton>
                      </Link>
                      <IconButton
                        onClick={handleDelete.bind(null, member.id)}
                        color="error"
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
