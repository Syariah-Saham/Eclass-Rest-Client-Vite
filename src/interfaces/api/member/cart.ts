import { ICourseItemMember } from "../../course-model";

export interface IMGetCartResponse {
  items: ICourseItemMember[];
}

export interface IMCartAddItemResponse {
  message: string;
}

export interface IMCartRemoveItemResponse {
  message: string;
}
