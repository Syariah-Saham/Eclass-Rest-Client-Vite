import { IMenuItemProps, TMenu } from "../interfaces/components/menu-item";

const menus: IMenuItemProps[] = [
  {
    target: "/admin/dashboard",
    icon: "dashboard",
    text: "Dashboard",
    name: TMenu.DASHBOARD,
  },
  {
    target: "/admin/courses",
    icon: "courses",
    text: "Kelas",
    name: TMenu.COURSES,
  },
  {
    target: "/admin/admins",
    icon: "admins",
    text: "Admin",
    name: TMenu.ADMINS,
  },
  {
    target: "/admin/mentors",
    icon: "mentors",
    text: "Mentor",
    name: TMenu.MENTORS,
  },
  {
    target: "/admin/members",
    icon: "members",
    text: "Member",
    name: TMenu.MEMBERS,
  },
  {
    target: "/admin/profile",
    icon: "profile",
    text: "Profile",
    name: TMenu.PROFILE,
  },
];

export default menus;
