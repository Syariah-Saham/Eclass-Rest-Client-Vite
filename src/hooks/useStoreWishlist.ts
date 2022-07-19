import { useEffect } from "react";
import { openSnackbar } from "../redux/actions/snackbar";
import { storeWishlist } from "../redux/actions/wishlist";
import { useAppDispatch } from "../redux/hooks";
import { getWishlistItems } from "../services/member/wishlist";
import { ACTION_WISHLIST } from "../types/wishlist";

export const useStoreWishlist = () => {
  const dispatch = useAppDispatch();

  const fetchWishlist = async () => {
    try {
      const response = await getWishlistItems();
      dispatch(storeWishlist(response.data.items));
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
      dispatch({
        type: ACTION_WISHLIST.STOP_LOADING,
      });
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);
};
