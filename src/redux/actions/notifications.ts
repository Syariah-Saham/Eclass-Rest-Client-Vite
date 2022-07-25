import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { INotification } from "../../interfaces/notification-model";
import {
  notifMarkReadAll,
  notifMarkReadById,
} from "../../services/member/notifications";
import { ACTION_NOTIF } from "../../types/actions/notifications";
import { RootState, store } from "../store";
import { openSnackbar } from "./snackbar";

export const storeNotifications = (data: INotification[]) => {
  return {
    type: ACTION_NOTIF.STORE,
    data,
  };
};

export const markAsRead = (
  id: number
): ThunkAction<any, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      await notifMarkReadById({ id: id });
      dispatch(_markAsRead_(id));
    } catch (error: any) {
      store.dispatch(
        openSnackbar({
          severity: error,
          message: error?.message,
        })
      );
    }
  };
};

export const _markAsRead_ = (id: number) => {
  return {
    type: ACTION_NOTIF.MARK_READ_ITEM,
    id: id,
  };
};

export const markAsReadAll = (): ThunkAction<
  any,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    try {
      await notifMarkReadAll();
      dispatch(_markAsReadAll_());
    } catch (error: any) {
      store.dispatch(
        openSnackbar({
          severity: error,
          message: error?.message,
        })
      );
    }
  };
};

export const _markAsReadAll_ = () => {
  return {
    type: ACTION_NOTIF.MARK_READ_ALL,
  };
};
