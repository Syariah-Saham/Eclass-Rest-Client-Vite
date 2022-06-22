import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./Create";
import List from "./List";

const Mentors: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};

export default Mentors;
