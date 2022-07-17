import { ICourseItemMember } from "../course-model";

export interface IWishlistState {
  list: ICourseItemMember[];
  loading: boolean;
}
