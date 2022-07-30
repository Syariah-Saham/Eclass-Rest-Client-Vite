import { IGetPaymentsAdminResponse } from "../interfaces/api/admin/payments";
import { store } from "../redux/store";
import { apiService, methodServices } from "./api-service";

const URL = {
  BASE_PAYMENTS: "/admin/payments",
};

export const getPaymentsAdmin = () => {
  const token = store.getState().auth.token;
  return apiService<IGetPaymentsAdminResponse, any>(
    URL.BASE_PAYMENTS,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};
