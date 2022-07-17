import { ICourseItemMember } from "../../interfaces/course-model";
import { ACTION_COURSES } from "../../types/courses";

export const storeCourses = (data: ICourseItemMember[]) => {
  return {
    type: ACTION_COURSES.STORE,
    data,
  };
};
