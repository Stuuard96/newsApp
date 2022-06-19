import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, ResetPassPage } from "../auth";
import { NoticiasRoutes } from "../noticias/routes/NoticiasRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="resetPass" element={<ResetPassPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<NoticiasRoutes />} />
      </Routes>
    </>
  );
};
