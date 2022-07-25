import React from "react";
import { Route, Routes } from "react-router-dom";
import { useStoreCart } from "../../hooks/useStoreCart";
import { useStoreCourses } from "../../hooks/useStoreCourses";
import { useStoreNotifications } from "../../hooks/useStoreNotifications";
import { useStorePayments } from "../../hooks/useStorePayments";
import { useStoreWishlist } from "../../hooks/useStoreWishlist";
import MemberLayout from "../../layouts/dashboard/MemberLayout";
import Cart from "./Cart";
import Certificates from "./Certificates";
import Dashboard from "./Dashboard";
import MyCourses from "./MyCourses";
import Payments from "./Payments";
import Profile from "./Profile";
import WishList from "./WishList";

const Member: React.FC = () => {
  useStoreCourses();
  useStoreNotifications();
  useStoreCart();
  useStoreWishlist();
  useStorePayments();

  return (
    <MemberLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses/*" element={<MyCourses />} />
        <Route path="/certificates/*" element={<Certificates />} />
        <Route path="/wishlist/*" element={<WishList />} />
        <Route path="/cart/*" element={<Cart />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/payments/*" element={<Payments />} />
      </Routes>
    </MemberLayout>
  );
};

export default Member;
