import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardCart, {
  CardCartSkeleton,
} from "../../../components/dashboard/CardCart";
import DataEmptySection from "../../../components/dashboard/DataEmptySection";
import { sliceIntoChunks } from "../../../helpers/chunk-array";
import { usePage } from "../../../hooks/usePage";
import { ICourseItemMember } from "../../../interfaces/course-model";
import { removeCartItemAction } from "../../../redux/actions/cart";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { removeCartItem } from "../../../services/member/cart";
import CardCheckout from "./CardCheckout";
import WishlistSection from "./WishlistSection";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const [showCartItem, setShowCartItem] = useState<ICourseItemMember[][]>([]);
  const [loadingRemove, setLoadingRemove] = useState(false);
  const { page, setTotal, changePage } = usePage({
    current: 1,
    total: 1,
    perPage: 3,
  });

  useEffect(() => {
    const tmpItems = sliceIntoChunks(cart.list, page.perPage);
    setTotal(tmpItems.length);
    setShowCartItem(tmpItems);
  }, [cart.list]);

  const handleRemove = async (id: number) => {
    setLoadingRemove(true);
    try {
      await removeCartItem({ id: id });
      dispatch(removeCartItemAction({ id: id }));
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Berhasil dihapus dari keranjang",
        })
      );
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    } finally {
      setLoadingRemove(false);
    }
  };

  return (
    <Box>
      <Box>
        <Typography variant="h3" sx={{ display: { xs: "none", md: "block" } }}>
          Keranjang
        </Typography>
        <Typography variant="h5" sx={{ display: { xs: "block", md: "none" } }}>
          Keranjang
        </Typography>
        <Grid container spacing={{ xs: 3, md: 5 }} sx={{ marginTop: "0px" }}>
          <Grid item xs={12} md={8}>
            {cart.loading && (
              <Stack direction="column" spacing={3}>
                <CardCartSkeleton />
                <CardCartSkeleton />
                <CardCartSkeleton />
              </Stack>
            )}
            {!cart.loading && (
              <Stack direction={"column"} spacing={3}>
                {showCartItem[page.current - 1]?.map((course) => (
                  <CardCart
                    key={course.id}
                    isCart
                    course={course}
                    loadingRemove={loadingRemove}
                    handleRemove={handleRemove}
                  />
                ))}
              </Stack>
            )}

            {!cart.list.length && !cart.loading && <DataEmptySection />}
            <Stack direction="row" justifyContent={"center"} marginTop="40px">
              <Pagination
                count={page.total}
                variant={"outlined"}
                onChange={changePage}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardCheckout
              loadingRemove={loadingRemove}
              handleRemove={handleRemove}
            />
          </Grid>
        </Grid>
      </Box>
      <WishlistSection />
    </Box>
  );
};

export default Cart;
