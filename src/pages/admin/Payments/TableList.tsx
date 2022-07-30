import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Box,
  Stack,
  Pagination,
  TableBody,
  useTheme,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { sliceIntoChunks } from "../../../helpers/chunk-array";
import { formatRp } from "../../../helpers/formatRp";
import { numColTable } from "../../../helpers/numColTable";
import { usePage } from "../../../hooks/usePage";
import { IPayment } from "../../../interfaces/payment-model";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../redux/hooks";
import { getPaymentsAdmin } from "../../../services/payments";

const TableList: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [paymentsList, setPaymentsList] = useState<IPayment[][]>([]);
  const { page, setTotal, changePage } = usePage({
    current: 1,
    total: 1,
    perPage: 10,
  });

  const fetchAllPayments = async () => {
    try {
      const response = await getPaymentsAdmin();
      const tmpPayments = sliceIntoChunks(response.data.payments, page.perPage);
      setTotal(tmpPayments.length);
      setPaymentsList(tmpPayments);
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
    fetchAllPayments();
  }, []);

  const statusColor = {
    SETTLED: theme.palette.success.main,
    PAID: theme.palette.secondary.main,
    EXPIRY: theme.palette.error.main,
    PENDING: theme.palette.warning.main,
  };

  return (
    <Box sx={{ marginTop: "40px" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" className="tcell-head">
                #
              </TableCell>
              <TableCell className="tcell-head">Invoice ID</TableCell>
              <TableCell className="tcell-head">External ID</TableCell>
              <TableCell className="tcell-head">Amout</TableCell>
              <TableCell className="tcell-head">Status</TableCell>
              <TableCell className="tcell-head">Expiry Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading &&
              paymentsList[page.current - 1]?.map((payment, i) => (
                <TableRow key={payment.id}>
                  <TableCell align="center">
                    {numColTable(page.perPage, page.current, i)}
                  </TableCell>
                  <TableCell>{payment.invoice_id}</TableCell>
                  <TableCell>{payment.external_id}</TableCell>
                  <TableCell>{formatRp(payment.amount)}</TableCell>
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
                  <TableCell>{payment.expiry_date}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" justifyContent={"center"} marginTop="40px">
        <Pagination
          count={page.total}
          variant={"outlined"}
          onChange={changePage}
        />
      </Stack>
    </Box>
  );
};

export default TableList;
