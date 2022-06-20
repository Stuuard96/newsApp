import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, PerfilPage } from "../pages";
import { Footer, Navbar } from "../../ui";

export const NoticiasRoutes = ({ handleClosedSession, isLogged }) => {
  return (
    <>
      <Navbar handleClosedSession={handleClosedSession} isLogged={isLogged} />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="perfil" element={<PerfilPage isLogged={isLogged} />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </>
  );
};
