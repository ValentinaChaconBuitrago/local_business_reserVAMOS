import React from "react";

const FormSignup = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-sm-offset-3"></div>

        <div className="col-sm-4 col-sm-offset-3">


          <div className="col-md-4">
            <div className="card-box-c foo">
              <div className="card-header-c d-flex">
                <div className="card-box-iconn">
                  <span className="fa fa-sign-in"></span>
                </div>
                <div className="card-title-c align-self-center">
                  <h2 className="title-c">Registro</h2>
                </div>
              </div>
            </div>
          </div>

          <form action="/signup" method="post">
            <div className="form-group">
              <label>Usuario</label>
              <input type="text" className="form-control" name="username" />
            </div>
            <div className="form-group">
              <label>Fecha de Nacimiento</label>
              <input type="text" className="form-control" name="date" />
            </div>
            <div className="form-group">
              <label>Celular</label>
              <input type="text" className="form-control" name="phone" />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <button type="submit" className="btn btn-entrar btn-lg">
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
