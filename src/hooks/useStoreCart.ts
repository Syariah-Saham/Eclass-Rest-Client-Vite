import { useEffect } from "react";
import { storeCart } from "../redux/actions/cart";
import { openSnackbar } from "../redux/actions/snackbar";
import { useAppDispatch } from "../redux/hooks";
import { getCartItems } from "../services/member/cart";
import { ACTION_CART } from "../types/cart";

export const useStoreCart = () => {
  const dispatch = useAppDispatch();

  const fetchCarts = async () => {
    try {
      const response = await getCartItems();
      dispatch(storeCart(response.data.items));
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
      dispatch({
        type: ACTION_CART.STOP_LOADING,
      });
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);
};
