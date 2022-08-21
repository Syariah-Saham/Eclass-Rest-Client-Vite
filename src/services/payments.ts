import { IGetPaymentsAdminResponse } from "../interfaces/api/admin/payments";
import { IPaymentCallback } from "../interfaces/payment-model";
import { store } from "../redux/store";
import { apiService, methodServices } from "./api-service";

const URL = {
  BASE_PAYMENTS_ADMIN: "/admin/payments",
  BASE_PAYMENT: "/payment",
};

export const getPaymentsAdmin = () => {
  const token = store.getState().auth.token;
  return apiService<IGetPaymentsAdminResponse, any>(
    URL.BASE_PAYMENTS_ADMIN,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const submitCallbackPayment = (data: IPaymentCallback) => {
  return apiService<any, any>(
    URL.BASE_PAYMENT + `/callback`,
    methodServices.POST,
    data,
    null
  );
};
