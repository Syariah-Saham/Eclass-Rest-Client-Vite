import { AnyAction } from "redux";
import { ICoursesState } from "../../interfaces/state/courses-state";
import { ACTION_COURSES } from "../../types/courses";

const initialState: ICoursesState = {
  list: [],
  loading: true,
  owned_list: [],
  loading_owned: true,
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
      return {
        ...state,
        owned_list: myCourses,
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
    default:
      return state;
  }
};

export default coursesReducer;
