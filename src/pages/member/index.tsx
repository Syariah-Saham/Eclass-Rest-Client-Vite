import React from "react";
import { Route, Routes } from "react-router-dom";
import MemberLayout from "../../layouts/dashboard/MemberLayout";
import Cart from "./Cart";
import Certificates from "./Certificates";
import Dashboard from "./Dashboard";
import MyCourses from "./MyCourses";
import Profile from "./Profile";
import WishList from "./WishList";

const Member: React.FC = () => {
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
