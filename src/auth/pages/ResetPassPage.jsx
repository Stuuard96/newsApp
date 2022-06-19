import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Identity from "@arc-publishing/sdk-identity";

export const ResetPassPage = () => {
  const urlBase = "https://api-sandbox.elcomercio.pe";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [dataLogin, setDataLogin] = useState({ emailLogin: "" });

  useEffect(() => {
    Identity.apiOrigin = urlBase;
  });

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
      {success ? (
        <section className="resetPass">
          <div className="resetPass__container">
            <img src="assets/img/success.svg" alt="Imagen success" />
            <h2>
              Envíamos un correo a {dataLogin.emailLogin}. Ingresa a tu casilla
              y sigue las instrucciones para continuar con la recuperación de la
              contraseña
            </h2>
            <Link className="btn resetBtn" to={"/home"}>
              Regresar a la pagina principal
            </Link>
          </div>
        </section>
      ) : (
        <section className="login">
          <div className="login__container">
            <div className="login__info--container">
              <h2 className="title">Restablece tu contraseña</h2>
              {error && (
                <p className="alert alert-danger inputLogin">{error}</p>
              )}
              <form className="form" onSubmit={handleSubmit}>
                <input
                  className="form-control py-3 my-3 inputLogin"
                  type="email"
                  name="emailLogin"
                  placeholder="Correo electronico"
                  onChange={handleInput}
                  required
                  autoFocus
                  autoComplete="new-off"
                />
                <button className="btn py-3 my-3" onClick={handleSubmit}>
                  Restablecer
                </button>
                <Link to={"/login"}>
                  <span className="span parrafo">
                    Regresar a Iniciar Sesión
                  </span>
                </Link>
              </form>
            </div>
            <img
              className="image__container"
              src="assets/img/login.svg"
              alt=""
            />
          </div>
        </section>
      )}
    </>
  );
};
