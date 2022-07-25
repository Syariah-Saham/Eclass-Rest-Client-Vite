import { IGetNotificationsResponse } from "../../interfaces/api/member/notifications";
import { store } from "../../redux/store";
import { apiService, methodServices } from "../api-service";

const URL = {
  BASE_NOTIF: "/member/notifications",
};

export const getNotifications = () => {
  const token = store.getState().auth.token;
  return apiService<IGetNotificationsResponse, any>(
    URL.BASE_NOTIF,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const notifMarkReadById = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<{ message: string }, any>(
    URL.BASE_NOTIF + `/${data.id}/mark-read`,
    methodServices.PATCH,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const notifMarkReadAll = () => {
  const token = store.getState().auth.token;
  return apiService<{ message: string }, any>(
    URL.BASE_NOTIF + `/mark-read-all`,
    methodServices.PATCH,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};
