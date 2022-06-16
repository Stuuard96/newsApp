import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, PerfilPage } from "../pages";
import { Footer, Navbar } from "../../ui";

export const NoticiasRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="perfil" element={<PerfilPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </>
  );
};
