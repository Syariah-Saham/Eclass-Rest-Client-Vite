import {
  Box,
  IconButton,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ReceiptLongTwoToneIcon from "@mui/icons-material/ReceiptLongTwoTone";
import PaymentsTwoToneIcon from "@mui/icons-material/PaymentsTwoTone";
import { usePage } from "../../../hooks/usePage";
import { useAppSelector } from "../../../redux/hooks";
import { IPayment } from "../../../interfaces/payment-model";
import { sliceIntoChunks } from "../../../helpers/chunk-array";
import { formatRp } from "../../../helpers/formatRp";
import moment from "moment";

const Payments: React.FC = () => {
  const theme = useTheme();
  const payments = useAppSelector((state) => state.payments);
  const [showItems, setShowItems] = useState<IPayment[][]>([]);
  const { page, changePage, setTotal } = usePage({
    current: 1,
    total: 1,
    perPage: 10,
  });

  useEffect(() => {
    const tmpItems = sliceIntoChunks(payments.list, page.perPage);
    setTotal(tmpItems.length);
    setShowItems(tmpItems);
  }, [payments.list]);

  const statusColor = {
    SETTLED: theme.palette.success.main,
    PAID: theme.palette.secondary.main,
    EXPIRY: theme.palette.error.main,
    PENDING: theme.palette.warning.main,
  };

  return (
    <Box>
      <Typography variant="h3">Riwayat Pembayaran</Typography>
      <TableContainer sx={{ marginTop: "20px" }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="tcell-head">#</TableCell>
              <TableCell className="tcell-head">Deskripsi</TableCell>
              <TableCell className="tcell-head">Tanggal</TableCell>
              <TableCell className="tcell-head">Tgl. Kadaluarsa</TableCell>
              <TableCell className="tcell-head">Total</TableCell>
              <TableCell className="tcell-head">Status</TableCell>
              <TableCell className="tcell-head">Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!payments.loading &&
              showItems[page.current - 1]?.map((payment, i) => (
                <TableRow key={payment.id}>
                  <TableCell sx={{ width: "30px" }}>{i + 1}</TableCell>
                  <TableCell>{payment.description}</TableCell>
                  <TableCell sx={{ width: "100px" }}>
                    {moment(payment.created_at)?.format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell sx={{ width: "130px" }}>
                    {moment(payment.expiry_date)?.format("DD/MM/YYYY HH:mm")}
                  </TableCell>
                  <TableCell sx={{ width: "320px" }}>
                    <Typography
                      sx={{ color: theme.palette.warning.main + ` !important` }}
                    >
                      {formatRp(payment.amount)}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ width: "100px" }}>
                    <Typography
                      fontWeight={"bold"}
                      sx={{
                        color: `${statusColor[payment.status]} !important`,
                      }}
                    >
                      {payment.status}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ width: "140px" }}>
                    <Stack direction="row" gap={2}>
                      <Tooltip title="Invoice" placement="top">
                        <IconButton color="secondary">
                          <ReceiptLongTwoToneIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Bayar" placement="top">
                        <a
                          target="_blank"
                          href={`https://checkout-staging.xendit.co/web/${payment?.invoice_id}`}
                        >
                          <IconButton color="success">
                            <PaymentsTwoToneIcon />
                          </IconButton>
                        </a>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}

            {!payments.list.length && !payments.loading && (
              <TableRow>
                <TableCell colSpan={7}>
                  <Typography textAlign={"center"}>Tidak ada data</Typography>
                </TableCell>
              </TableRow>
            )}
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

export default Payments;
