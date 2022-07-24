import { ICourse, ICourseItemMember } from "../../interfaces/course-model";
import { ACTION_COURSES } from "../../types/courses";

export const storeCourses = (data: ICourseItemMember[]) => {
  return {
    type: ACTION_COURSES.STORE,
    data,
  };
};

export const storeMyCourses = (
  data: ICourseItemMember[],
  last_learning: ICourse
) => {
  return {
    type: ACTION_COURSES.STORE_OWNED,
    data,
    last_learning,
  };
};

export const toggleWishlistCourses = (data: {
  id: number;
  status: boolean;
}) => {
  return {
    type: ACTION_COURSES.TOGGLE_WISHLIST,
    id: data.id,
    status: data.status,
  };
};
