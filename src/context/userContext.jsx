import { createContext, useContext, useState } from "react";
import Identity from "@arc-publishing/sdk-identity";

const userContext = createContext();

export const useUserContext = () => {
  return useContext(userContext);
};

export const UserProvider = ({ children }) => {
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

  return (
    <userContext.Provider
      value={{ isLogged, setIsLogged, handleLogged, handleClosedSession }}
    >
      {children}
    </userContext.Provider>
  );
};
