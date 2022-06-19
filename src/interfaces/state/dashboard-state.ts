import { TMenu } from "../components/menu-item";

export interface IDashboardState {
  page: string;
  title: string;
  menu: TMenu;
  showSidebar?: boolean;
}
