import { AnyAction } from "redux";
import { IPaymentsState } from "../../interfaces/state/payments-state";
import { ACTION_PAYMENTS } from "../../types/payments";

const initialState: IPaymentsState = {
  list: [],
  loading: true,
};

const paymentsReducer = (
  state = initialState,
  action: AnyAction
): IPaymentsState => {
  switch (action?.type) {
    case ACTION_PAYMENTS.STORE:
      const data = action.data;
      return {
        ...state,
        list: data,
        loading: false,
      };
    case ACTION_PAYMENTS.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case ACTION_PAYMENTS.ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.newItem],
      };
    case ACTION_PAYMENTS.REMOVE_ITEM:
      const newList = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};

export default paymentsReducer;
