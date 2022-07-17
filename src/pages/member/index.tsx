import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MemberLayout from "../../layouts/dashboard/MemberLayout";
import { storeCourses } from "../../redux/actions/courses";
import { openSnackbar } from "../../redux/actions/snackbar";
import { useAppDispatch } from "../../redux/hooks";
import { getCourses } from "../../services/member/courses";
import { ACTION_COURSES } from "../../types/courses";
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
      const response = await getCourses();
      dispatch(storeCourses(response.data.courses));
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
