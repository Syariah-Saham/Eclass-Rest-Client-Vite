import { ICourseItemMember } from "../../course-model";

export interface IMGetWishlistResponse {
  items: ICourseItemMember[];
}

export interface IMWishlistAddItemResponse {
  message: string;
}

export interface IMWishlistRemoveItemResponse {
  message: string;
}
