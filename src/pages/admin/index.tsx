import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/dashboard/AdminLayout";
import Admins from "./Admins";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import Members from "./Members";
import Mentors from "./Mentors";
import Profile from "./Profile";

const Admin: React.FC = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses/*" element={<Courses />} />
        <Route path="/admins/*" element={<Admins />} />
        <Route path="/members/*" element={<Members />} />
        <Route path="/mentors/*" element={<Mentors />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </AdminLayout>
  );
};

export default Admin;
