import { ICourseItemMember } from "../course-model";

export interface ICoursesState {
  list: ICourseItemMember[];
  loading: boolean;
  owned_list: ICourseItemMember[];
  loading_owned: boolean;
}
