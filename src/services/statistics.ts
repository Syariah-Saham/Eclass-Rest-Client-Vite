import { IGetStatisticsResponse } from "../interfaces/api/admin/statistics";
import { store } from "../redux/store";
import { apiService, methodServices } from "./api-service";

const URL = {
  BASE_STATISTICS: "/admin/statistics",
};

export const getStatistics = () => {
  const token = store.getState().auth.token;
  return apiService<IGetStatisticsResponse, any>(
    URL.BASE_STATISTICS,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};
