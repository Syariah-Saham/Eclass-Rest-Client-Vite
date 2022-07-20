import { ICourse } from "../../course-model";
import { IPayment, IPaymentDetail } from "../../payment-model";

export interface IMGetPaymentsResponse {
  payments: IPayment[];
}

export interface IMGetPaymentByIdResponse {
  payment: IPaymentDetail;
}
