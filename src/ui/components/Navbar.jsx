import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [style, setStyle] = useState(false);

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
            <li className={`nav__logo ${style ? "nav__logo--toggle" : ""} `}>
              <Link to={"/home"}>
                <img src="./assets/img/logo-nav.svg" alt="logo" />
              </Link>
            </li>
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
          </ul>
        </nav>
      </div>
    </header>
  );
};
