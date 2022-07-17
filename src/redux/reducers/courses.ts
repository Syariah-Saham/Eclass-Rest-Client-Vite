import { AnyAction } from "redux";
import { ICoursesState } from "../../interfaces/state/courses-state";
import { ACTION_COURSES } from "../../types/courses";

const initialState: ICoursesState = {
  list: [],
  loading: true,
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
    case ACTION_COURSES.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default coursesReducer;
