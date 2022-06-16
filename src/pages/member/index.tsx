import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

const Member: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Member;
