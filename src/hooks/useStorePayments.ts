import { useEffect } from "react";
import { storePayments } from "../redux/actions/payments";
import { openSnackbar } from "../redux/actions/snackbar";
import { useAppDispatch } from "../redux/hooks";
import { getPaymentsMember } from "../services/member/payments";
import { ACTION_PAYMENTS } from "../types/payments";

export const useStorePayments = () => {
  const dispatch = useAppDispatch();

  const fetchPayments = async () => {
    try {
      const response = await getPaymentsMember();
      dispatch(storePayments(response.data.payments));
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
      dispatch({
        type: ACTION_PAYMENTS.STOP_LOADING,
      });
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);
};
