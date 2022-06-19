import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/dashboard/AdminLayout";
import Dashboard from "./Dashboard";

const Admin: React.FC = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AdminLayout>
  );
};

export default Admin;
