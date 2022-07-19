import { AnyAction } from "redux";
import { ICartState } from "../../interfaces/state/cart-state";
import { ACTION_CART } from "../../types/cart";

const initialState: ICartState = {
  list: [],
  loading: true,
};

const cartReducer = (state = initialState, action: AnyAction): ICartState => {
  switch (action?.type) {
    case ACTION_CART.STORE:
      const data = action.data;
      return {
        ...state,
        list: data,
        loading: false,
      };
    case ACTION_CART.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case ACTION_CART.ADD_ITEM:
      let check = state.list.find((item) => item.id === action.newItem.id);
      if (!check) {
        return {
          ...state,
          list: [...state.list, action.newItem],
        };
      }
      return state;
    case ACTION_CART.REMOVE_ITEM:
      const newList = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case ACTION_CART.CHECKOUT_CART:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
