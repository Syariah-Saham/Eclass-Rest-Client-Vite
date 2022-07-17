import { AnyAction } from "redux";
import { IWishlistState } from "../../interfaces/state/wishlist-state";
import { ACTION_WISHLIST } from "../../types/wishlist";

const initialState: IWishlistState = {
  list: [],
  loading: true,
};

const wishlistReducer = (
  state = initialState,
  action: AnyAction
): IWishlistState => {
  switch (action?.type) {
    case ACTION_WISHLIST.STORE:
      const data = action.data;
      return {
        ...state,
        list: data,
        loading: false,
      };
    case ACTION_WISHLIST.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case ACTION_WISHLIST.ADD_ITEM:
      const check = state.list.find((item) => item.id === action.newItem.id);
      const newItem = { ...action.newItem, is_wishlist: true };
      if (!check) {
        return {
          ...state,
          list: [...state.list, newItem],
        };
      }
      return state;
    case ACTION_WISHLIST.REMOVE_ITEM:
      const newList = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};

export default wishlistReducer;
