import React, { useState } from "react";
import Identity from "@arc-publishing/sdk-identity";
import { Link, Navigate } from "react-router-dom";

export const RegisterPage = ({ handleLogged, isLogged }) => {
  const [error, setError] = useState(false);
  const [dataRegister, setDataRegister] = useState({
    emailRegister: "",
    passRegister: "",
    namesRegister: "",
    apellidoPaRegister: "",
    apellidoMaRegister: "",
    telRegister: "",
    tipoDocRegister: "",
    numeroDocRegister: "",
  });

  if (isLogged) {
    return <Navigate to="/perfil" />;
  }

  const handleInput = (e) => {
    const { value, name } = e.target;
    setDataRegister({
      ...dataRegister,
      [name]: value.trim(),
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
      telRegister,
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
        contacts: [
          {
            phone: telRegister,
            type: "HOME",
          },
        ],
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
        handleLogged();
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
            {error && <p className="parrafo parrafo__alert">{error}</p>}
            <input
              className="form-control inputLogin"
              type="email"
              name="emailRegister"
              placeholder="Correo electronico"
              onChange={handleInput}
              required
              autoFocus
              autoComplete="new-off"
            />
            <input
              className="inputLogin"
              type="password"
              name="passRegister"
              placeholder="*********"
              onChange={handleInput}
              required
            />
            <input
              className="inputLogin"
              type="text"
              name="namesRegister"
              placeholder="Nombres"
              onChange={handleInput}
              required
              autoComplete="new-off"
            />
            <input
              className="inputLogin"
              type="text"
              name="apellidoPaRegister"
              placeholder="Apellido paterno"
              onChange={handleInput}
              required
              autoComplete="new-off"
            />
            <input
              className="inputLogin"
              type="text"
              name="apellidoMaRegister"
              placeholder="Apellido materno"
              onChange={handleInput}
              required
              autoComplete="new-off"
            />
            <input
              className="inputLogin"
              type="number"
              name="telRegister"
              placeholder="Telefono"
              onChange={handleInput}
              required
              autoComplete="new-off"
            />
            <select
              defaultValue={"DEFAULT"}
              className="inputLogin"
              name="tipoDocRegister"
              onChange={handleInput}
              required
              autoComplete="new-off"
              style={{ color: "#666" }}
            >
              <option value="DEFAULT" disabled>
                Tipo de documento
              </option>
              <option value="DNI">DNI</option>
              <option value="RUC">RUC</option>
              <option value="CEX">CEX</option>
            </select>
            <input
              className="inputLogin"
              type="number"
              name="numeroDocRegister"
              placeholder="Nro. de documento"
              onChange={handleInput}
              required
              autoComplete="new-off"
            />
            <button className="btn">Resgistrarse</button>
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
