import React, { useEffect, useState } from "react";
import Identity from "@arc-publishing/sdk-identity";
import { Link, Navigate } from "react-router-dom";

export const PerfilPage = ({ isLogged }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
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
  if (isLogged === false) {
    return <Navigate to="/home" />;
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
      namesRegister,
      apellidoPaRegister,
      apellidoMaRegister,
      tipoDocRegister,
      numeroDocRegister,
    } = dataRegister;
    Identity.updateUserProfile({
      firstName: namesRegister,
      lastName: apellidoPaRegister,
      secondLastName: apellidoMaRegister,
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
    })
      .then((res) => {
        setSuccess("Tus datos han sido guardados correctamente!");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const {
    emailRegister = "",
    namesRegister = "",
    apellidoPaRegister = "",
    apellidoMaRegister = "",
    tipoDocRegister = "",
    numeroDocRegister = "",
  } = dataRegister;

  return (
    <section className="login">
      <div className="login__container register__container">
        <div className="login__info--container">
          <h2 className="title">Bienvenido a tu perfil</h2>
          <form className="form" onSubmit={handleSubmit}>
            {error && <p className="alert alert-danger inputLogin">{error}</p>}
            {success && (
              <p className="alert alert-success inputLogin">{success}</p>
            )}
            <input
              className="form-control py-3 my-3 inputLogin"
              type="email"
              name="emailRegister"
              placeholder="Correo electronico"
              onChange={handleInput}
              value={emailRegister}
              required
              autoFocus
              autoComplete="new-off"
              disabled
            />

            <input
              className="form-control py-3 my-3 inputLogin"
              type="text"
              name="namesRegister"
              placeholder="Nombres"
              onChange={handleInput}
              value={namesRegister}
              required
              autoComplete="new-off"
            />
            <input
              className="form-control py-3 my-3 inputLogin"
              type="text"
              name="apellidoPaRegister"
              placeholder="Apellido paterno"
              onChange={handleInput}
              value={apellidoPaRegister}
              required
              autoComplete="new-off"
            />
            <input
              className="form-control py-3 my-3 inputLogin"
              type="text"
              name="apellidoMaRegister"
              placeholder="Apellido materno"
              onChange={handleInput}
              value={apellidoMaRegister}
              required
              autoComplete="new-off"
            />
            <select
              defaultValue={tipoDocRegister}
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
              value={numeroDocRegister}
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
