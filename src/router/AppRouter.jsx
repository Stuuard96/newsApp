import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, ResetPassPage } from "../auth";
import Identity from "@arc-publishing/sdk-identity";
import { NoticiasRoutes } from "../noticias/routes/NoticiasRoutes";

export const AppRouter = () => {
  const urlBase = "https://api-sandbox.elcomercio.pe";
  const [isLogged, setIsLogged] = useState(false);

  const handleLogged = () => {
    Identity.isLoggedIn()
      .then((res) => {
        if (res === true) {
          setIsLogged(true);
        }
      })
      .catch((erra) => {
        console.log("Oops algo falló", erra);
      });
  };

  const handleClosedSession = () => {
    Identity.logout().then((res) => {
      setIsLogged(false);
    });
  };

  useEffect(() => {
    Identity.apiOrigin = urlBase;
    handleLogged();
  });

  return (
    <Routes>
      <Route
        path="resetPass"
        element={
          <ResetPassPage handleLogged={handleLogged} isLogged={isLogged} />
        }
      />
      <Route
        path="register"
        element={
          <RegisterPage handleLogged={handleLogged} isLogged={isLogged} />
        }
      />
      <Route
        path="login"
        element={<LoginPage handleLogged={handleLogged} isLogged={isLogged} />}
      />
      <Route
        path="/*"
        element={
          <NoticiasRoutes
            handleLogged={handleLogged}
            isLogged={isLogged}
            handleClosedSession={handleClosedSession}
          />
        }
      />
    </Routes>
  );
};
