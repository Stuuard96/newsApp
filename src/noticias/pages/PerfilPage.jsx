import React, { useEffect, useState } from "react";
import Identity from "@arc-publishing/sdk-identity";
import { Navigate } from "react-router-dom";

export const PerfilPage = ({ isLogged }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [dataRegister, setDataRegister] = useState({});

  useEffect(() => {
    Identity.getUserProfile().then((res) => {
      const {
        email,
        firstName,
        lastName,
        secondLastName,
        contacts,
        attributes,
      } = res;

      const phonUser = contacts[0].phone;
      const tipDocUser = attributes[0].value;
      const numDocUser = attributes[1].value;

      setDataRegister({
        emailRegister: email,
        namesRegister: firstName,
        apellidoPaRegister: lastName,
        apellidoMaRegister: secondLastName,
        telRegister: phonUser,
        tipoDocRegister: tipDocUser,
        numeroDocRegister: numDocUser,
      });
    });
  }, [setDataRegister]);

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
      telRegister,
      tipoDocRegister,
      numeroDocRegister,
    } = dataRegister;
    Identity.updateUserProfile({
      firstName: namesRegister,
      lastName: apellidoPaRegister,
      secondLastName: apellidoMaRegister,
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
    telRegister = "",
    tipoDocRegister = "",
    numeroDocRegister = "",
  } = dataRegister;

  /* if (!isLogged) {
    return <Navigate to="/home" />;
  } */

  return (
    <section className="login">
      <div className="login__container register__container">
        <div className="login__info--container">
          <h2 className="title">Bienvenido a tu perfil</h2>
          <form className="form" onSubmit={handleSubmit}>
            {error && <p className="parrafo parrafo__error">{error}</p>}
            {success && <p className="parrafo parrafo__success">{success}</p>}
            <input
              className="inputLogin"
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
              className="inputLogin"
              type="text"
              name="namesRegister"
              placeholder="Nombres"
              onChange={handleInput}
              value={namesRegister}
              required
              autoComplete="new-off"
            />
            <input
              className="inputLogin"
              type="text"
              name="apellidoPaRegister"
              placeholder="Apellido paterno"
              onChange={handleInput}
              value={apellidoPaRegister}
              required
              autoComplete="new-off"
            />
            <input
              className="inputLogin"
              type="text"
              name="apellidoMaRegister"
              placeholder="Apellido materno"
              onChange={handleInput}
              value={apellidoMaRegister}
              required
              autoComplete="new-off"
            />
            <input
              className="inputLogin"
              type="text"
              name="telRegister"
              placeholder="Telefono"
              onChange={handleInput}
              value={telRegister}
              required
              autoComplete="new-off"
            />
            <select
              value={tipoDocRegister}
              className="inputLogin"
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
              className="inputLogin"
              type="number"
              name="numeroDocRegister"
              placeholder="Nro. de documento"
              onChange={handleInput}
              value={numeroDocRegister}
              required
              autoComplete="new-off"
            />
            <button className="btn">Actualizar</button>
          </form>
        </div>
        <img className="image__container" src="assets/img/login.svg" alt="" />
      </div>
    </section>
  );
};
