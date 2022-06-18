import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info footer__list">
          <ul>
            <li>
              <a href="">Últimas Noticias</a>
            </li>
            <li>
              <a href="">Cine & Series</a>
            </li>
            <li>
              <a href="">Verificador</a>
            </li>
            <li>
              <a href="">Feriados 2022</a>
            </li>
            <li>
              <a href="">Política</a>
            </li>
            <li>
              <a href="">Mundo</a>
            </li>
            <li>
              <a href="">Datos LR</a>
            </li>
            <li>
              <a href="">Horóscopo chino</a>
            </li>
            <li>
              <a href="">Economía</a>
            </li>
            <li>
              <a href="">Tendencias</a>
            </li>
            <li>
              <a href="">Perú</a>
            </li>
            <li>
              <a href="">Sociedad</a>
            </li>
            <li>
              <a href="">Deportes</a>
            </li>
            <li>
              <a href="">Cultura</a>
            </li>
            <li>
              <a href="">Espectaculos</a>
            </li>
            <li>
              <a href="">Tecnología</a>
            </li>
            <li>
              <a href="">Columnistas</a>
            </li>
            <li>
              <a href="">Rpa-Latam</a>
            </li>
            <li>
              <a href="">Loterías y sorteos</a>
            </li>
            <li>
              <a href="">Globalización</a>
            </li>
          </ul>
        </div>
        <div className="footer__reserved">
          <Link to={"/home"}>
            <span>Huddle</span>
          </Link>
          <p className="parrafo">
            © 2021 Design By Developers. All Rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
