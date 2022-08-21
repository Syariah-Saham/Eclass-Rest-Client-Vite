import { TPayment } from "../types/payments";
import { ICourse } from "./course-model";
import { IResources } from "./resources";

export interface IPayment extends IResources {
  id: number;
  user_id: number;
  invoice_id: string;
  external_id: string;
  amount: number;
  status: TPayment;
  expiry_date: string;
  description?: string;
}

export interface IPaymentCallback {
  id: string;
  external_id: string;
  amount: number;
  paid_amount: number;
  status: TPayment;
}

export interface IPaymentDetail extends IPayment {
  courses: ICourse[];
}
