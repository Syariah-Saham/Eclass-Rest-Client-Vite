import { IDashboardGetDataCountResponse } from "../interfaces/api/admin/dashboard";
import { store } from "../redux/store";
import { apiService, methodServices } from "./api-service";

const URL = {
  BASE_DASHBOARD: "/admin/dashboard",
};

export const getDataCount = () => {
  const token = store.getState().auth.token;
  return apiService<IDashboardGetDataCountResponse, any>(
    URL.BASE_DASHBOARD + "/count",
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};
