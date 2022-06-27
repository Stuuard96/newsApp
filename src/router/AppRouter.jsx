import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, ResetPassPage } from "../auth";
import Identity from "@arc-publishing/sdk-identity";
import { NoticiasRoutes } from "../noticias/routes/NoticiasRoutes";
import { useUserContext } from "../context/userContext";

export const AppRouter = () => {
  const urlBase = "https://api-sandbox.elcomercio.pe";
  const user = useUserContext();
  const { handleLogged } = user;
  useEffect(() => {
    Identity.apiOrigin = urlBase;
    handleLogged();
  });

  return (
    <Routes>
      <Route path="resetPass" element={<ResetPassPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="/*" element={<NoticiasRoutes />} />
    </Routes>
  );
};
