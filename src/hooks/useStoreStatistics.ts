import { useEffect } from "react";
import { openSnackbar } from "../redux/actions/snackbar";
import { storeStatistics } from "../redux/actions/statistics";
import { useAppDispatch } from "../redux/hooks";
import { getStatistics } from "../services/statistics";
import { ACTION_STATISTICS } from "../types/actions/statistics";

export const useStoreStatistics = () => {
  const dispatch = useAppDispatch();

  const fetchStatistics = async () => {
    try {
      const response = await getStatistics();
      dispatch(storeStatistics(response.data.statistics));
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
      dispatch({
        type: ACTION_STATISTICS.STOP_LOADING,
      });
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, []);
};
