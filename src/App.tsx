import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/admin";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Page404 from "./pages/error/404";
import LandingPage from "./pages/landing/LandingPage";
import Member from "./pages/member";
import StyleGuide from "./styles/utils/StyleGuide";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/style-guide" element={<StyleGuide />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/member/*" element={<Member />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default App;
