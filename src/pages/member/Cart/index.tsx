import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import CardCart from "../../../components/dashboard/CardCart";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";

const Cart: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box>
        <Typography variant="h3">Keranjang</Typography>
        <Grid container spacing={5} sx={{ marginTop: "0px" }}>
          <Grid item md={8}>
            <Stack direction={"column"} spacing={3}>
              <CardCart />
              <CardCart />
              <CardCart />
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ marginLeft: "50px" }}>
              <Typography variant="h4" sx={{ marginBottom: "15px" }}>
                Item
              </Typography>
              <Stack direction="column" spacing={1}>
                <Box>
                  <Typography variant="h6">
                    1. Lorem ipsum dolor sit amet
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.palette.warning.main,
                      marginLeft: "20px",
                    }}
                  >
                    Rp399.000
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6">
                    2. Lorem ipsum dolor sit amet
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.palette.warning.main,
                      marginLeft: "20px",
                    }}
                  >
                    Rp399.000
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6">
                    3. Lorem ipsum dolor sit amet
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.palette.warning.main,
                      marginLeft: "20px",
                    }}
                  >
                    Rp399.000
                  </Typography>
                </Box>
              </Stack>
              <Box
                sx={{
                  marginTop: "20px",
                  paddingTop: "20px",
                  borderTop: `1px solid ${theme.palette.secondary.dark}`,
                }}
              >
                <Typography
                  fontWeight={"bold"}
                  variant="h5"
                  sx={{ marginLeft: "20px" }}
                >
                  Total Pembayaran
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: theme.palette.warning.main,
                    marginLeft: "20px",
                  }}
                >
                  Rp1.499.000
                </Typography>
              </Box>
              <Button
                color="secondary"
                size="large"
                sx={{ width: "100%", marginTop: "20px" }}
                startIcon={<AccountBalanceWalletRoundedIcon />}
              >
                Checkout
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: "80px" }}>
        <Typography variant="h3">Ingin Dipelajari</Typography>
        <Grid container spacing={5} sx={{ marginTop: "0px" }}>
          <Grid item md={8}>
            <Stack direction={"column"} spacing={3}>
              <CardCart />
              <CardCart />
              <CardCart />
            </Stack>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Cart;
