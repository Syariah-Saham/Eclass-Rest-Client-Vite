import { IPayment } from "../../interfaces/payment-model";
import { ACTION_PAYMENTS } from "../../types/payments";

export const storePayments = (data: IPayment[]) => {
  return {
    type: ACTION_PAYMENTS.STORE,
    data,
  };
};

export const addPaymentItemAction = (data: IPayment) => {
  return {
    type: ACTION_PAYMENTS.ADD_ITEM,
    newItem: data,
  };
};
