import { IDashboardState } from "../../interfaces/state/dashboard-state";
import { ACTION_DASHBOARD } from "../../types/dashboard";

export const changePage = (data: IDashboardState) => {
  return {
    type: ACTION_DASHBOARD.CHANGE_PAGE,
    data,
  };
};

export const toggleSidebar = () => {
  return {
    type: ACTION_DASHBOARD.TOGGLE_SIDEBAR,
  };
};
