import { ICourseItemMember } from "../../course-model";

export interface IMGetCoursesResponse {
  courses: ICourseItemMember[];
}

export interface IMGetMyCoursesResponse {
  courses: ICourseItemMember[];
}

export interface IMGetCoursesByTitleResponse {
  courses: ICourseItemMember[];
}
