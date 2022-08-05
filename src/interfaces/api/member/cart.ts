import { ICourseItemMember } from "../../course-model";
import { IInvoice } from "../../invoice-model";
import { IPayment } from "../../payment-model";

export interface IMGetCartResponse {
  items: ICourseItemMember[];
}

export interface IMCartAddItemResponse {
  message: string;
}

export interface IMCartRemoveItemResponse {
  message: string;
}

export interface IMCartCheckoutResponse {
  payment: IPayment;
  invoice: IInvoice;
}
