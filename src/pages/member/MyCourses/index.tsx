import React from "react";
import { Route, Routes } from "react-router-dom";
import List from "./List";
import Preview from "./Preview";

const MyCourses: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/:id" element={<Preview />} />
    </Routes>
  );
};

export default MyCourses;
