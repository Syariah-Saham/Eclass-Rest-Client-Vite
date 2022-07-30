import { AnyAction } from "redux";
import { IStatisticsState } from "../../interfaces/state/statistics-state";
import { ACTION_STATISTICS } from "../../types/actions/statistics";

const initialState: IStatisticsState = {
  loading: true,
  list: [],
};

const statisticsReducer = (
  state = initialState,
  action: AnyAction
): IStatisticsState => {
  switch (action.type) {
    case ACTION_STATISTICS.STORE:
      const data = action.data;
      return {
        ...state,
        list: data,
        loading: false,
      };
    case ACTION_STATISTICS.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default statisticsReducer;
