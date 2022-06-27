import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Identity from "@arc-publishing/sdk-identity";
import { useUserContext } from "../../context/userContext";

export const Navbar = () => {
  const user = useUserContext();
  const { handleClosedSession, isLogged } = user;
  const [style, setStyle] = useState(false);
  const [dataRegister, setDataRegister] = useState({});

  useEffect(() => {
    Identity.getUserProfile().then((res) => {
      const { email, firstName, lastName, secondLastName, attributes } = res;
      const tipDocUser = attributes[0].value;
      const numDocUser = attributes[1].value;
      setDataRegister({
        emailRegister: email,
        namesRegister: firstName,
        apellidoPaRegister: lastName,
        apellidoMaRegister: secondLastName,
        tipoDocRegister: tipDocUser,
        numeroDocRegister: numDocUser,
      });
    });
  }, [setDataRegister]);

  const handleStyle = () => {
    setStyle(!style);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">
          <Link to={"/home"}>
            <img src="./assets/img/logo.svg" alt="logo" />
          </Link>
        </div>
        <div
          className={`menu ${style ? "menu__open" : ""}`}
          onClick={handleStyle}
        >
          <span></span>
        </div>
        <nav className={`aside ${style ? "aside__toggle" : ""}`}>
          <ul className="nav">
            {isLogged ? (
              <>
                <li>
                  <Link className="btn" to={"/perfil"}>
                    {dataRegister.namesRegister}
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn"
                    to={"/home"}
                    onClick={handleClosedSession}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="btn" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="btn" to={"/register"}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
