import {
  useTheme,
  Card,
  Typography,
  Stack,
  Box,
  Button,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import { useAppSelector } from "../../../redux/hooks";
import { formatRp } from "../../../helpers/formatRp";

const CourseItemSkeleton: React.FC = () => {
  return (
    <Box>
      <Skeleton variant="text" width="100%" height="26px" />
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Skeleton variant="text" height="32px" width="40%" />
        <Skeleton variant="rectangular" height="30px" width="120px" />
      </Stack>
    </Box>
  );
};

interface ICardCheckoutProps {
  handleRemove: (id: number) => void;
  loadingRemove: boolean;
}
const CardCheckout: React.FC<ICardCheckoutProps> = ({
  handleRemove,
  loadingRemove,
}) => {
  const theme = useTheme();
  const cart = useAppSelector((state) => state.cart);
  const [totalBill, setTotalBill] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.list?.forEach((course) => (total += course.price));
    setTotalBill(total);
  }, [cart.list]);

  return (
    <Card sx={{ marginLeft: "50px" }}>
      <Typography variant="h4" sx={{ marginBottom: "15px" }}>
        Item
      </Typography>
      <Stack direction="column" spacing={2}>
        {cart.loading &&
          [1, 2, 3, 4].map((item) => <CourseItemSkeleton key={item} />)}

        {!cart.loading &&
          cart.list?.map((course, i) => (
            <Box key={course.id}>
              <Typography variant="h6">
                {i + 1}. {course.title}
              </Typography>
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.warning.main,
                    marginLeft: "20px",
                  }}
                >
                  {formatRp(course.price)}
                </Typography>
                <Button
                  variant="text"
                  size="small"
                  color="error"
                  onClick={handleRemove?.bind(null, course.id)}
                  disabled={loadingRemove}
                >
                  hapus
                </Button>
              </Stack>
            </Box>
          ))}

        {!cart.list.length && !cart.loading && (
          <Typography>Tidak ada data</Typography>
        )}
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
          {formatRp(totalBill)}
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
  );
};

export default CardCheckout;
