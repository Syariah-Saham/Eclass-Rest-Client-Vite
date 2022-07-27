import { IMenuItemProps, TMenu } from "../interfaces/components/menu-item";

const menus: IMenuItemProps[] = [
  {
    target: "/member/dashboard",
    icon: "dashboard",
    text: "Beranda",
    name: TMenu.DASHBOARD,
  },
  {
    target: "/member/courses",
    icon: "courses",
    text: "Kelasku",
    name: TMenu.COURSES,
  },
  {
    target: "/member/certificates",
    icon: "certificates",
    text: "Sertifikat",
    name: TMenu.CERTIFICATES,
  },
  {
    target: "/member/wishlist",
    icon: "wishlist",
    text: "Wishlist",
    name: TMenu.WISHLIST,
  },
  {
    target: "/member/cart",
    icon: "cart",
    text: "Keranjang",
    name: TMenu.CART,
  },
  {
    target: "/member/payments",
    icon: "payments",
    text: "Pembayaran",
    name: TMenu.PAYMENTS,
  },
  {
    target: "/member/profile",
    icon: "profile",
    text: "Profile",
    name: TMenu.PROFILE,
  },
  {
    target: "/member/help",
    icon: "help",
    text: "Bantuan",
    name: TMenu.HELP,
  },
];

export const menusMobile: {
  dashboard: IMenuItemProps;
  courses: IMenuItemProps;
  wishlist: IMenuItemProps;
  certificates: IMenuItemProps;
  profile: IMenuItemProps;
} = {
  dashboard: {
    target: "/member/dashboard",
    icon: "dashboard",
    text: "Beranda",
    name: TMenu.DASHBOARD,
  },
  courses: {
    target: "/member/courses",
    icon: "courses",
    text: "Kelasku",
    name: TMenu.COURSES,
  },
  wishlist: {
    target: "/member/wishlist",
    icon: "wishlist",
    text: "Wishlist",
    name: TMenu.WISHLIST,
  },
  certificates: {
    target: "/member/certificates",
    icon: "certificates",
    text: "Sertifikat",
    name: TMenu.CERTIFICATES,
  },
  profile: {
    target: "/member/profile",
    icon: "profile",
    text: "Profile",
    name: TMenu.PROFILE,
  },
};
export default menus;
