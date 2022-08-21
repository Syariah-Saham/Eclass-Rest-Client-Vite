import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import List from "./List";

const Members: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
};

export default Members;
