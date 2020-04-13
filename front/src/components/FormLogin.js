import React from "react";

const FormLogin = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-sm-offset-3"></div>

        <div className="col-sm-4 col-sm-offset-3">
          <h1>
            <span className="fa fa-sign-in"></span> Ingresar
          </h1>

          <form action="/login" method="post">
            <div className="form-group">
              <label>Usuario</label>
              <input type="text" className="form-control" name="username" />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" className="form-control" name="password" />
            </div>

            <button type="submit" className="btn btn-warning btn-lg">
              Entrar
            </button>
          </form>
          <hr />

          <p>
            Necesita una cuenta? <a href="/signup">Registrarse</a>
          </p>
          <p>
            Ir a<a href="/"> Inicio</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
