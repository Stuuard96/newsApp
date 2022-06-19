import React, { useEffect, useState } from "react";
import Identity from "@arc-publishing/sdk-identity";
import { Link, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export const RegisterPage = () => {
  const urlBase = "https://api-sandbox.elcomercio.pe";
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState(false);
  const [dataRegister, setDataRegister] = useState({
    emailRegister: "",
    passRegister: "",
    namesRegister: "",
    apellidoPaRegister: "",
    apellidoMaRegister: "",
    tipoDocRegister: "",
    numeroDocRegister: "",
  });

  useEffect(() => {
    Identity.apiOrigin = urlBase;
  });

  if (isLogged) {
    return <Navigate to="/perfil" />;
  }

  const handleInput = (e) => {
    const { value, name } = e.target;
    setDataRegister({
      ...dataRegister,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      emailRegister,
      passRegister,
      namesRegister,
      apellidoPaRegister,
      apellidoMaRegister,
      tipoDocRegister,
      numeroDocRegister,
    } = dataRegister;
    Identity.signUp(
      {
        userName: emailRegister,
        credentials: passRegister,
        password: "password",
      },
      {
        firstName: namesRegister,
        lastName: apellidoPaRegister,
        secondLastName: apellidoMaRegister,
        displayName: emailRegister,
        email: emailRegister,
        attributes: [
          {
            name: "typeDocument",
            value: tipoDocRegister,
            type: "String",
          },
          {
            name: "document",
            value: numeroDocRegister,
            type: "String",
          },
        ],
      }
    )
      .then((res) => {
        setIsLogged(true);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <section className="login">
      <div className="login__container register__container">
        <div className="login__info--container">
          <h2 className="title">Registrate</h2>
          <form className="form" onSubmit={handleSubmit}>
            {error && <p className="alert alert-danger inputLogin">{error}</p>}
            <input
              className="form-control py-3 my-3 inputLogin"
              type="email"
              name="emailRegister"
              placeholder="Correo electronico"
              onChange={handleInput}
              required
              autoFocus
              autoComplete="new-off"
            />
            <input
              className="form-control py-3 my-3 inputLogin"
              type="password"
              name="passRegister"
              placeholder="*********"
              onChange={handleInput}
              required
            />
            <input
              className="form-control py-3 my-3 inputLogin"
              type="text"
              name="namesRegister"
              placeholder="Nombres"
              onChange={handleInput}
              required
              autoComplete="new-off"
            />
            <input
              className="form-control py-3 my-3 inputLogin"
              type="text"
              name="apellidoPaRegister"
              placeholder="Apellido paterno"
              onChange={handleInput}
              required
              autoComplete="new-off"
            />
            <input
              className="form-control py-3 my-3 inputLogin"
              type="text"
              name="apellidoMaRegister"
              placeholder="Apellido materno"
              onChange={handleInput}
              required
              autoComplete="new-off"
            />
            <select
              defaultValue={"DEFAULT"}
              className="form-select form-select-sm py-3 my-3 inputLogin text-muted"
              name="tipoDocRegister"
              onChange={handleInput}
              required
              autoComplete="new-off"
            >
              <option value="DEFAULT" disabled>
                Tipo de documento
              </option>
              <option value="DNI">DNI</option>
              <option value="RUC">RUC</option>
              <option value="CEX">CEX</option>
            </select>
            <input
              className="form-control py-3 my-3 inputLogin"
              type="number"
              name="numeroDocRegister"
              placeholder="Nro. de documento"
              onChange={handleInput}
              required
              autoComplete="new-off"
            />
            <button className="btn py-3 my-3">Resgistrarse</button>
            <p className="parrafo">
              ¿Ya tienes una cuenta?{" "}
              <Link to={"/login"}>
                <span className="span">Inicia sesión</span>
              </Link>
            </p>
          </form>
        </div>
        <img className="image__container" src="assets/img/login.svg" alt="" />
      </div>
    </section>
  );
};
