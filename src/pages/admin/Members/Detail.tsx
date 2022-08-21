import {
  Avatar,
  Box,
  Card,
  Grid,
  Stack,
  Table,
  Paper,
  TableContainer,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IGetMemberByIdResponse } from "../../../interfaces/api/admin/members";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../redux/hooks";
import { getMemberById } from "../../../services/members";
import moment from "moment";
import "moment/dist/locale/id";
import { parseCategory } from "../../../helpers/parseCategory";
import { formatRp } from "../../../helpers/formatRp";
import CardInfoMember from "./_Detail/CardInfoMember";
import { IUser } from "../../../interfaces/user-model";

const Detail: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [data, setData] = useState<
    IGetMemberByIdResponse | { member?: IUser; payments: []; courses: [] }
  >({
    payments: [],
    courses: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchMember = async () => {
    try {
      const response = await getMemberById({ id: parseInt(id!) });
      setData(response.data);
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
  };

  useEffect(() => {
    fetchMember();
  }, []);

  const statusColor = {
    SETTLED: theme.palette.success.main,
    PAID: theme.palette.secondary.main,
    EXPIRY: theme.palette.error.main,
    PENDING: theme.palette.warning.main,
  };

  return (
    <>
      <Grid container>
        <Grid item md={8}>
          <CardInfoMember member={data?.member} />
        </Grid>
        <Grid item md={6}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="tcell-head" width={"14px"}>
                    #
                  </TableCell>
                  <TableCell className="tcell-head">Kelas</TableCell>
                  <TableCell className="tcell-head">Kategori</TableCell>
                  <TableCell className="tcell-head">Harga</TableCell>
                  <TableCell className="tcell-head">Sertifikat</TableCell>
                  <TableCell className="tcell-head">Lulus</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.courses?.map((course, i) => (
                  <TableRow key={course.id}>
                    <TableCell align="center">{i + 1}</TableCell>
                    <TableCell>{course?.title}</TableCell>
                    <TableCell align="center">
                      {parseCategory(course?.category)}
                    </TableCell>
                    <TableCell>{formatRp(course?.price)}</TableCell>
                    <TableCell align="center">
                      {course?.certificate_id ? (
                        <Link to={`/certificates/${course?.certificate_id}`}>
                          lihat
                        </Link>
                      ) : (
                        "-"
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {course?.graduation_date
                        ? moment(course?.graduation_date).format("DD-MM-YYYY")
                        : "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={6}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="tcell-head" width={"14px"}>
                    #
                  </TableCell>
                  <TableCell className="tcell-head">Invoice ID</TableCell>
                  <TableCell className="tcell-head">External ID</TableCell>
                  <TableCell className="tcell-head">Tagihan</TableCell>
                  <TableCell className="tcell-head">Status</TableCell>
                  <TableCell className="tcell-head">Kadaluarsa</TableCell>
                  <TableCell className="tcell-head">Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.payments?.map((payment, i) => (
                  <TableRow key={payment.id}>
                    <TableCell align="center">{i + 1}</TableCell>
                    <TableCell>{payment?.invoice_id}</TableCell>
                    <TableCell>{payment?.external_id}</TableCell>
                    <TableCell>{formatRp(payment?.amount)}</TableCell>
                    <TableCell>
                      <Typography
                        fontWeight={"bold"}
                        sx={{
                          color: `${statusColor[payment.status]} !important`,
                        }}
                      >
                        {payment.status}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      {moment(payment.expiry_date)?.format("DD/MM HH:mm")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Detail;
