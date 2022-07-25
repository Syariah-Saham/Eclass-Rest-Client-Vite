import { AnyAction } from "redux";
import { INotificationsState } from "../../interfaces/state/notifications-state";
import { ACTION_NOTIF } from "../../types/actions/notifications";

const initialState: INotificationsState = {
  list: [],
  loading: true,
};

const notificationReducer = (
  state = initialState,
  action: AnyAction
): INotificationsState => {
  switch (action.type) {
    case ACTION_NOTIF.STORE:
      const data = action.data;
      return {
        ...state,
        list: data,
        loading: false,
      };
    case ACTION_NOTIF.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case ACTION_NOTIF.MARK_READ_ITEM:
      const newList = state.list.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            is_read: true,
          };
        }
        return item;
      });
      return {
        ...state,
        list: newList,
      };
    case ACTION_NOTIF.MARK_READ_ALL:
      const newList2 = state.list.map((item) => {
        return {
          ...item,
          is_read: true,
        };
      });
      return {
        ...state,
        list: newList2,
      };
    default:
      return state;
  }
};

export default notificationReducer;
