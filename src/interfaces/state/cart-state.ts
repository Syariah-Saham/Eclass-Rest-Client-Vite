import { ICourseItemMember } from "../course-model";

export interface ICartState {
  list: ICourseItemMember[];
  loading: boolean;
}
