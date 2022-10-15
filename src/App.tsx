import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/admin";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VerifyEmail from "./pages/auth/VerifyEmail";
import VerifyEmailProcess from "./pages/auth/VerifyEmailProcess";
import Certificate from "./pages/certificate";
import Page404 from "./pages/error/404";
import LandingPage from "./pages/landing/LandingPage";
import Member from "./pages/member";
import AdminRoute from "./routes/AdminRoute";
import AuthRoute from "./routes/AuthRoute";
import MemberRoute from "./routes/MemberRoute";
import VerifyRoute from "./routes/VerifyRoute";
import { testApi } from "./services/welcome";
import StyleGuide from "./styles/utils/StyleGuide";

const App: React.FC = () => {
  useEffect(() => {
    (async () => {
      let response = await testApi();
      console.log(response.data);
    })();

    document.addEventListener("contextmenu", (e) => e.preventDefault());
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
        path="/verify-email"
        element={
          <VerifyRoute>
            <VerifyEmail />
          </VerifyRoute>
        }
      />
      <Route
        path="/verify-email-process"
        element={
          <VerifyRoute>
            <VerifyEmailProcess />
          </VerifyRoute>
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
      <Route path="/certificate/:id" element={<Certificate />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default App;
