import React, { useEffect, useState } from "react";
import Identity from "@arc-publishing/sdk-identity";
import { Link, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export const LoginPage = () => {
  const urlBase = "https://api-sandbox.elcomercio.pe";
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState(false);
  const [dataLogin, setDataLogin] = useState({ emailLogin: "", passLogin: "" });

  useEffect(() => {
    Identity.apiOrigin = urlBase;
  });

  if (isLogged) {
    return <Navigate to="/home" />;
  }

  const handleInput = (e) => {
    const { value, name } = e.target;
    setDataLogin({
      ...dataLogin,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { emailLogin, passLogin } = dataLogin;
    Identity.login(emailLogin, passLogin, { rememberMe: true })
      .then((res) => setIsLogged(true))
      .catch((err) => {
        setError("Correo o contraseña inválidos");
      });
  };

  return (
    <>
      <section className="login">
        <div className="login__container">
          <div className="login__info--container">
            <h2 className="title">Inicia sesión</h2>
            <form className="form" onSubmit={handleSubmit}>
              {error && (
                <p className="alert alert-danger inputLogin">{error}</p>
              )}
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
              <input
                className="form-control py-3 my-3 inputLogin"
                type="password"
                name="passLogin"
                placeholder="*********"
                onChange={handleInput}
                required
              />
              <p className="parrafo">
                ¿Olvidaste tu contraseña?{" "}
                <Link to={"/resetPass"}>
                  <span className="span">Presiona aquí</span>
                </Link>
              </p>
              <button className="btn py-3 my-3">Ingresar</button>
              <p className="parrafo">
                ¿Aún no tienes una cuenta?{" "}
                <Link to={"/register"}>
                  <span className="span">Registrate</span>
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
