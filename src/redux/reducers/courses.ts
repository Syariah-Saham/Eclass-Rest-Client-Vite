import { AnyAction } from "redux";
import { ICoursesState } from "../../interfaces/state/courses-state";
import { ACTION_COURSES } from "../../types/courses";

const initialState: ICoursesState = {
  list: [],
  loading: true,
  owned_list: [],
  loading_owned: true,
  last_learning: null,
};

const coursesReducer = (
  state = initialState,
  action: AnyAction
): ICoursesState => {
  switch (action?.type) {
    case ACTION_COURSES.STORE:
      const data = action.data;
      return {
        ...state,
        list: data,
        loading: false,
      };
    case ACTION_COURSES.STORE_OWNED:
      const myCourses = action.data;
      const last_learning = action.last_learning;
      return {
        ...state,
        owned_list: myCourses,
        last_learning: last_learning,
        loading_owned: false,
      };
    case ACTION_COURSES.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case ACTION_COURSES.STOP_LOADING_OWNED:
      return {
        ...state,
        loading: false,
      };
    case ACTION_COURSES.TOGGLE_WISHLIST:
      const newList = state.list.map((course) => {
        if (course.id === action.id) {
          return {
            ...course,
            is_wishlist: action.status,
          };
        }
        return course;
      });
      return {
        ...state,
        list: newList,
      };
    case ACTION_COURSES.UPDATE_LEARN:
      const course = action.course;
      return {
        ...state,
        last_learning: course,
      };
    default:
      return state;
  }
};

export default coursesReducer;
