import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IMenuItemProps } from "../interfaces/components/menu-item";
import { changePage } from "../redux/actions/dashboard";
import { useAppDispatch } from "../redux/hooks";

export const useMenuDashboard = (props: { menus: IMenuItemProps[] }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    props.menus.forEach((menu) => {
      if (location.pathname.includes(menu.target)) {
        dispatch(
          changePage({
            page: menu.icon,
            title: menu.text,
            menu: menu.name,
          })
        );
      }
    });
  }, [location]);
};
