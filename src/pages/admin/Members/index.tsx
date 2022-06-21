import React from "react";
import { Route, Routes } from "react-router-dom";
import List from "./List";

const Members: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
    </Routes>
  );
};

export default Members;
