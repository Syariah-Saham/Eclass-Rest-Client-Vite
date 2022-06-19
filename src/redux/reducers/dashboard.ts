import { AnyAction } from "redux";
import { TMenu } from "../../interfaces/components/menu-item";
import { IDashboardState } from "../../interfaces/state/dashboard-state";
import { ACTION_DASHBOARD } from "../../types/dashboard";

const initialState: IDashboardState = {
  page: "",
  title: "Dashboard",
  menu: TMenu.DASHBOARD,
  showSidebar: true,
};

const dashboardReducer = (
  state = initialState,
  action: AnyAction
): IDashboardState => {
  let tmpState = { ...state };
  switch (action?.type) {
    case ACTION_DASHBOARD.CHANGE_PAGE:
      tmpState = {
        ...state,
        page: action.data.page,
        title: action.data.title,
        menu: action.data.menu,
      };
      break;
    case ACTION_DASHBOARD.TOGGLE_SIDEBAR:
      tmpState = {
        ...state,
        showSidebar: !state.showSidebar,
      };
      break;
    default:
      const localState = localStorage.getItem("eclass-dashboard");
      if (localState) {
        const tmpLocalState = JSON.parse(localState) as IDashboardState;
        return tmpLocalState;
      }
      return state;
  }
  localStorage.setItem("eclass-dashboard", JSON.stringify(tmpState));
  return tmpState;
};

export default dashboardReducer;
