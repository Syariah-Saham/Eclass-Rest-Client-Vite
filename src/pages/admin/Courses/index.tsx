import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./Create";
import Detail from "./Detail";
import Lesson from "./Lesson";
import List from "./List";

const Courses: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/create" element={<Create />} />
      <Route path="/:id" element={<Detail />} />
      <Route path="/:id/lessons/:lessonId" element={<Lesson />} />
    </Routes>
  );
};

export default Courses;
