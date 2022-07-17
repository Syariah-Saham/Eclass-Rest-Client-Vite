import { ICourseItemMember } from "../course-model";

export interface ICoursesState {
  list: ICourseItemMember[];
  loading: boolean;
}
