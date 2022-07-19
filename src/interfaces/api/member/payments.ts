import { IPayment } from "../../payment-model";

export interface IMGetPaymentsResponse {
  payments: IPayment[];
}

export interface IMGetPaymentByIdResponse {
  payment: IPayment;
}
