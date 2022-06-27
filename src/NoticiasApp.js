import React from "react";
import { UserProvider } from "./context/userContext";
import { AppRouter } from "./router/AppRouter";

export const NoticiasApp = () => {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
};
