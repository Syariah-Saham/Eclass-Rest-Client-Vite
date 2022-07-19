import { IPayment } from "../payment-model";

export interface IPaymentsState {
  list: IPayment[];
  loading: boolean;
}
