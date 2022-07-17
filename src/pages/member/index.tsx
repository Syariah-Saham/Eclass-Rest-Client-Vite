import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MemberLayout from "../../layouts/dashboard/MemberLayout";
import { storeCart } from "../../redux/actions/cart";
import { storeCourses } from "../../redux/actions/courses";
import { openSnackbar } from "../../redux/actions/snackbar";
import { storeWishlist } from "../../redux/actions/wishlist";
import { useAppDispatch } from "../../redux/hooks";
import { getCartItems } from "../../services/member/cart";
import { getCourses } from "../../services/member/courses";
import { getWishlistItems } from "../../services/member/wishlist";
import { ACTION_CART } from "../../types/cart";
import { ACTION_COURSES } from "../../types/courses";
import { ACTION_WISHLIST } from "../../types/wishlist";
import Cart from "./Cart";
import Certificates from "./Certificates";
import Dashboard from "./Dashboard";
import MyCourses from "./MyCourses";
import Profile from "./Profile";
import WishList from "./WishList";

const Member: React.FC = () => {
  const dispatch = useAppDispatch();

  const fetchAllCourses = async () => {
    try {
      const courses = await getCourses();
      const cart = await getCartItems();
      const wishlist = await getWishlistItems();
      dispatch(storeCourses(courses.data.courses));
      dispatch(storeCart(cart.data.items));
      dispatch(storeWishlist(wishlist.data.items));
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
      dispatch({
        type: ACTION_COURSES.STOP_LOADING,
      });
      dispatch({
        type: ACTION_CART.STOP_LOADING,
      });
      dispatch({
        type: ACTION_WISHLIST.STOP_LOADING,
      });
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <MemberLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses/*" element={<MyCourses />} />
        <Route path="/certificates/*" element={<Certificates />} />
        <Route path="/wishlist/*" element={<WishList />} />
        <Route path="/cart/*" element={<Cart />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </MemberLayout>
  );
};

export default Member;
