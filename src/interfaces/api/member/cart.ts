import { ICourseItemMember } from "../../course-model";
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
}
