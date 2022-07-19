import { TPayment } from "../types/payments";
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
