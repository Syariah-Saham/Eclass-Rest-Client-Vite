import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/admin";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Page404 from "./pages/error/404";
import LandingPage from "./pages/landing/LandingPage";
import Member from "./pages/member";
import AdminRoute from "./routes/AdminRoute";
import AuthRoute from "./routes/AuthRoute";
import MemberRoute from "./routes/MemberRoute";
import { testApi } from "./services/welcome";
import StyleGuide from "./styles/utils/StyleGuide";

const App: React.FC = () => {
  useEffect(() => {
    (async () => {
      let response = await testApi();
      console.log(response.data);
    })();
  }, []);

  return (
    <Routes>
      <Route path="/style-guide" element={<StyleGuide />} />
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={
          <AuthRoute>
            <Login />
          </AuthRoute>
        }
      />
      <Route
        path="/register"
        element={
          <AuthRoute>
            <Register />
          </AuthRoute>
        }
      />
      <Route
        path="/admin/*"
        element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        }
      />
      <Route
        path="/member/*"
        element={
          <MemberRoute>
            <Member />
          </MemberRoute>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default App;
