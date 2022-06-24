import React, { useState } from "react";
import { Link } from "react-router-dom";
import Identity from "@arc-publishing/sdk-identity";

export const ResetPassPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [dataLogin, setDataLogin] = useState({ emailLogin: "" });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setDataLogin({
      ...dataLogin,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { emailLogin } = dataLogin;
    Identity.requestResetPassword(emailLogin)
      .then((res) => setSuccess(true))
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <>
      <section className="login">
        {success && (
          <div className="resetPass">
            <div className="resetPass__container">
              <div className="resetPass__encabezado">
                <h2>Mensaje Enviado!</h2>
              </div>
              <Link to={"/home"}>
                <div className="resetPass__cerrar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </Link>
              <div className="resetPass__content">
                <span>
                  Envíamos un correo a {dataLogin.emailLogin}. Ingresa a tu
                  casilla y sigue las instrucciones para continuar con la
                  recuperación de la contraseña
                </span>
                <Link className="btn" to={"/home"}>
                  Regresar a la pagina principal
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="login__container">
          <div className="login__info--container">
            <h2 className="title">Restablece tu contraseña</h2>
            <form className="form" onSubmit={handleSubmit}>
              {error && <p className="parrafo parrafo__alert">{error}</p>}
              <input
                className="inputLogin"
                type="email"
                name="emailLogin"
                placeholder="Correo electronico"
                onChange={handleInput}
                required
                autoFocus
                autoComplete="new-off"
              />
              <button className="btn" onClick={handleSubmit}>
                Restablecer
              </button>
              <p className="parrafo">
                <Link to={"/login"}>
                  <span className="span">Regresar a Iniciar Sesión</span>
                </Link>
              </p>
            </form>
          </div>
          <img className="image__container" src="assets/img/login.svg" alt="" />
        </div>
      </section>
    </>
  );
};
