import React from "react";
import { Route, Routes } from "react-router-dom";
import MemberLayout from "../../layouts/dashboard/MemberLayout";
import Dashboard from "./Dashboard";
import MyCourses from "./MyCourses";

const Member: React.FC = () => {
  return (
    <MemberLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<MyCourses />} />
      </Routes>
    </MemberLayout>
  );
};

export default Member;
