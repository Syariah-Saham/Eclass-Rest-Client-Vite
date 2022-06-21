import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/dashboard/AdminLayout";
import Admins from "./Admins";
import Dashboard from "./Dashboard";

const Admin: React.FC = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admins/*" element={<Admins />} />
      </Routes>
    </AdminLayout>
  );
};

export default Admin;
