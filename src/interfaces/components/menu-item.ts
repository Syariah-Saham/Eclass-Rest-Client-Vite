export interface IMenuItemProps {
  target: string;
  icon: string;
  text: string;
  name: TMenu;
}

export interface IIconItems {
  [key: string]: JSX.Element;
}

export enum TMenu {
  DASHBOARD,
  COURSES,
  ADMINS,
  MENTORS,
  MEMBERS,
  PROFILE,
}
