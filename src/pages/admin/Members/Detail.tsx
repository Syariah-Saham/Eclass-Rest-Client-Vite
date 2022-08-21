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
  Button,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IGetMemberByIdResponse } from "../../../interfaces/api/admin/members";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../redux/hooks";
import { getMemberById, toggleCourseMember } from "../../../services/members";
import moment from "moment";
import "moment/dist/locale/id";
import { parseCategory } from "../../../helpers/parseCategory";
import { formatRp } from "../../../helpers/formatRp";
import CardInfoMember from "./_Detail/CardInfoMember";
import { IUser } from "../../../interfaces/user-model";
import ModalAddCourse from "./_Detail/ModalAddCourse";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import PriceCheckRoundedIcon from "@mui/icons-material/PriceCheckRounded";
import { TPayment } from "../../../types/payments";
import { IPayment } from "../../../interfaces/payment-model";
import { submitCallbackPayment } from "../../../services/payments";

const Detail: React.FC = () => {
  const theme = useTheme();
  const statusColor = {
    SETTLED: theme.palette.success.main,
    PAID: theme.palette.secondary.main,
    EXPIRY: theme.palette.error.main,
    PENDING: theme.palette.warning.main,
  };

  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [data, setData] = useState<
    IGetMemberByIdResponse | { member?: IUser; payments: []; courses: [] }
  >({
    payments: [],
    courses: [],
  });
  const [modalAddCourseState, setModalAddCourseState] = useState({
    show: false,
    onClose: () => {
      setModalAddCourseState({ ...modalAddCourseState, show: false });
    },
  });
  const [loading, setLoading] = useState(true);
  const [removeCoursesState, setRemoveCoursesState] = useState({
    count: 0,
    loading: 0,
  });
  const [markPaidPayment, setMarkPaidPayment] = useState({
    count: 0,
    loading: 0,
  });

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
  }, [
    modalAddCourseState.show,
    removeCoursesState.count,
    markPaidPayment.count,
  ]);

  const removeCourses = async (courseId: number) => {
    setRemoveCoursesState({ ...removeCoursesState, loading: courseId });
    try {
      await toggleCourseMember({ id: parseInt(id!), courseId });
      setRemoveCoursesState({
        ...removeCoursesState,
        loading: 0,
        count: removeCoursesState.count + 1,
      });
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Remove course successfully",
        })
      );
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
      setRemoveCoursesState({ ...removeCoursesState, loading: 0 });
    }
  };

  const markPaidPaymentFn = async (payment: IPayment) => {
    setMarkPaidPayment({ ...markPaidPayment, loading: payment.id });
    try {
      await submitCallbackPayment({
        id: payment.invoice_id,
        external_id: payment.external_id,
        amount: payment.amount,
        paid_amount: payment.amount,
        status: TPayment.PAID,
      });
      setMarkPaidPayment({
        ...markPaidPayment,
        loading: 0,
        count: markPaidPayment.count + 1,
      });
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Mark payment as paid successfully",
        })
      );
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
      setMarkPaidPayment({
        ...markPaidPayment,
        loading: 0,
      });
    }
  };

  return (
    <>
      <Grid container gap={2}>
        <Grid item md={8}>
          <CardInfoMember member={data?.member} />
        </Grid>
        <Grid item md={5}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    className="tcell-head"
                    align="center"
                    width={"14px"}
                  >
                    #
                  </TableCell>
                  <TableCell className="tcell-head">Kelas</TableCell>
                  <TableCell className="tcell-head" align="center">
                    Kategori
                  </TableCell>
                  <TableCell className="tcell-head" align="center">
                    Sertifikat
                  </TableCell>
                  <TableCell className="tcell-head" align="center">
                    Lulus
                  </TableCell>
                  <TableCell className="tcell-head" align="center">
                    Hapus
                  </TableCell>
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
                    <TableCell>
                      {course?.certificate_id ? (
                        <Link to={`/certificates/${course?.certificate_id}`}>
                          lihat
                        </Link>
                      ) : (
                        <Typography textAlign={"center"}>-</Typography>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {course?.graduation_date
                        ? moment(course?.graduation_date).format("DD-MM-YYYY")
                        : "-"}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="error"
                        disabled={removeCoursesState.loading === course.id}
                        onClick={removeCourses.bind(null, course.id)}
                      >
                        <RemoveCircleRoundedIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            color="secondary"
            sx={{ marginTop: "20px" }}
            onClick={() =>
              setModalAddCourseState({ ...modalAddCourseState, show: true })
            }
          >
            Tambah
          </Button>
        </Grid>
        <Grid item md={5}>
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
                  <TableCell className="tcell-head" align="center">
                    Status
                  </TableCell>
                  <TableCell className="tcell-head" align="center">
                    Kadaluarsa
                  </TableCell>
                  <TableCell className="tcell-head" align="center">
                    Aksi
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.payments?.map((payment, i) => (
                  <TableRow key={payment.id}>
                    <TableCell align="center">{i + 1}</TableCell>
                    <TableCell>{payment?.invoice_id}</TableCell>
                    <TableCell>{payment?.external_id}</TableCell>
                    <TableCell>{formatRp(payment?.amount)}</TableCell>
                    <TableCell align="center">
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
                    <TableCell align="center">
                      {payment.status === TPayment.PENDING && (
                        <IconButton
                          color="success"
                          onClick={markPaidPaymentFn.bind(null, payment)}
                          disabled={markPaidPayment.loading === payment.id}
                        >
                          <PriceCheckRoundedIcon />
                        </IconButton>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <ModalAddCourse
        show={modalAddCourseState.show}
        onClose={modalAddCourseState.onClose}
        memberCourses={data.courses}
      />
    </>
  );
};

export default Detail;
