import React from "react";

const FormSignup = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-sm-offset-3"></div>

        <div className="col-sm-4 col-sm-offset-3">
          <h1>
            <span className="fa fa-sign-in"></span> Registrarse
          </h1>

          <form action="/signup" method="post">
            <div className="form-group">
              <label>Usuario</label>
              <input type="text" className="form-control" name="username" />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" className="form-control" name="password" />
            </div>

            <button type="submit" className="btn btn-warning btn-lg">
              Registrarse
            </button>
          </form>
          <hr />

          <p>
            Ya tiene una cuenta? <a href="/login">Ingresar</a>
          </p>
          <p>
            Ir a<a href="/"> Inicio</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormSignup;
