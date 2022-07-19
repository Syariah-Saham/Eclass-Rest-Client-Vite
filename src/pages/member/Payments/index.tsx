import {
  Box,
  IconButton,
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
} from "@mui/material";
import React from "react";
import ReceiptLongTwoToneIcon from "@mui/icons-material/ReceiptLongTwoTone";
import PaymentsTwoToneIcon from "@mui/icons-material/PaymentsTwoTone";

const Payments: React.FC = () => {
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet lorem ipsum dolor sit
                </TableCell>
                <TableCell>20/02/2020</TableCell>
                <TableCell>21/02/2020</TableCell>
                <TableCell>Rp1.300.000</TableCell>
                <TableCell>
                  <Typography fontWeight={"bold"}>PAID</Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" gap={2}>
                    <Tooltip title="Invoice" placement="top">
                      <IconButton color="secondary">
                        <ReceiptLongTwoToneIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Bayar" placement="top">
                      <IconButton color="success">
                        <PaymentsTwoToneIcon />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Payments;
