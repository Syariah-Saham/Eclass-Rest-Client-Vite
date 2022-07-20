import {
  Box,
  Card,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPaymentDetail } from "../../../../interfaces/payment-model";
import { openSnackbar } from "../../../../redux/actions/snackbar";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getPaymentByIdMember } from "../../../../services/member/payments";
import Logo from "../../../../assets/logos/logo_saham.png";
import moment from "moment";
import { formatRp } from "../../../../helpers/formatRp";

const Invoice: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const auth = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [payment, setPayment] = useState<IPaymentDetail | null>(null);

  const fetchPayment = async () => {
    try {
      const response = await getPaymentByIdMember({ id: parseInt(id!) });
      setPayment(response.data.payment);
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
    fetchPayment();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <Card sx={{ width: "80%", padding: "60px" }}>
        <Stack direction="row">
          <Box sx={{ width: "55%" }}>
            <img src={Logo} style={{ width: "200px" }} />
          </Box>
          <Box>
            <Typography variant="h3">INVOICE</Typography>
            <Typography>Invoice # : {payment?.invoice_id}</Typography>
            <Typography>ID Reference : {payment?.external_id}</Typography>
            <Typography>
              Invoice Date : {moment(payment?.created_at).format("DD/MM/YYYY")}
            </Typography>
          </Box>
        </Stack>
        <Box sx={{ marginTop: "80px" }}>
          <Typography variant="h5">Untuk </Typography>
          <Stack direction="row">
            <Typography sx={{ width: "160px" }}>Nama</Typography>
            <Typography fontWeight={"bold"}>: {auth.user?.name}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography sx={{ width: "160px" }}>Tanggal Pembelian</Typography>
            <Typography fontWeight={"bold"}>
              : {moment(payment?.created_at).format("DD/MM/YYYY")}
            </Typography>
          </Stack>

          <TableContainer sx={{ marginTop: "20px" }} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="tcell-head" sx={{ width: "30px" }}>
                    #
                  </TableCell>
                  <TableCell className="tcell-head">Kelas</TableCell>
                  <TableCell className="tcell-head" sx={{ width: "200px" }}>
                    Harga
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {payment?.courses.map((course, i) => (
                  <TableRow key={course.id}>
                    <TableCell sx={{ width: "30px" }}>{i + 1}</TableCell>
                    <TableCell>{course.title}</TableCell>
                    <TableCell>{formatRp(course.price)}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={2} align="right">
                    <Typography fontWeight={"bold"}>
                      Total Pembayaran
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontWeight={"bold"}>
                      {formatRp(payment?.amount || 0)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{ marginTop: "80px" }}>
          <Typography>Invoice ini sah dan diproses oleh komputer</Typography>
          <Typography>
            Silahkan hubungi Customer Service apabila kamu membutuhkan bantuan
          </Typography>
        </Box>
      </Card>
    );
  }
};

export default Invoice;
