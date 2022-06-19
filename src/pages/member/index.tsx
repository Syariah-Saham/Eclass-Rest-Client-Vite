import React from "react";
import { Route, Routes } from "react-router-dom";
import MemberLayout from "../../layouts/dashboard/MemberLayout";
import Dashboard from "./Dashboard";

const Member: React.FC = () => {
  return (
    <MemberLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </MemberLayout>
  );
};

export default Member;
