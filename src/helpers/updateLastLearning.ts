import { store } from "../redux/store";
import { ACTION_COURSES } from "../types/courses";

export const updateLastLearning = (id: number) => {
  const courses = store.getState().courses;
  const lastCourse = courses.list.find((course) => course.id === id);
  store.dispatch({
    type: ACTION_COURSES.UPDATE_LEARN,
    course: lastCourse,
  });
};
