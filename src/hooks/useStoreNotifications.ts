import { useEffect } from "react";
import { storeNotifications } from "../redux/actions/notifications";
import { openSnackbar } from "../redux/actions/snackbar";
import { useAppDispatch } from "../redux/hooks";
import { getNotifications } from "../services/member/notifications";
import { ACTION_NOTIF } from "../types/actions/notifications";

export const useStoreNotifications = () => {
  const dispatch = useAppDispatch();

  const fetchNotifications = async () => {
    try {
      const response = await getNotifications();
      dispatch(storeNotifications(response.data.notifications));
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
      dispatch({
        type: ACTION_NOTIF.STOP_LOADING,
      });
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);
};
