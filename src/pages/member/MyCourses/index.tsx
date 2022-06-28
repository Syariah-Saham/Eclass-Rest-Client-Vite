import React from "react";
import { Route, Routes } from "react-router-dom";
import Corridor from "./Corridor";
import Lesson from "./Lesson";
import List from "./List";
import Preview from "./Preview";

const MyCourses: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/:id" element={<Preview />} />
      <Route path="/:id/corridor" element={<Corridor />} />
      <Route path="/:id/lesson/:lessonId" element={<Lesson />} />
    </Routes>
  );
};

export default MyCourses;
