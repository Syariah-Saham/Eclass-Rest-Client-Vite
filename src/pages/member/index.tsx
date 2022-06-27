import React from "react";
import { Route, Routes } from "react-router-dom";
import MemberLayout from "../../layouts/dashboard/MemberLayout";
import Certificates from "./Certificates";
import Dashboard from "./Dashboard";
import MyCourses from "./MyCourses";

const Member: React.FC = () => {
  return (
    <MemberLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses/*" element={<MyCourses />} />
        <Route path="/certificates/*" element={<Certificates />} />
      </Routes>
    </MemberLayout>
  );
};

export default Member;
