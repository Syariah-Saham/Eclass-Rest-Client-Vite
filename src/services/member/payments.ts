import { apiService, methodServices } from "../api-service";
import { store } from "../../redux/store";
import {
  IMGetPaymentByIdResponse,
  IMGetPaymentsResponse,
} from "../../interfaces/api/member/payments";

const URL = {
  BASE_PAYMENTS: "/member/payments",
};

export const getPaymentsMember = () => {
  const token = store.getState().auth.token;
  return apiService<IMGetPaymentsResponse, any>(
    URL.BASE_PAYMENTS,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const getPaymentByIdMember = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IMGetPaymentByIdResponse, any>(
    URL.BASE_PAYMENTS + `/${data.id}`,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};
