import React from "react";

const FormLogin = () => {
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
                  <h2 className="title-c">Ingreso</h2>
                </div>
              </div>
            </div>
          </div>






          <form action="/login" method="post">
            <div className="form-group">
              <label>Usuario</label>
              <input type="text" className="form-control" name="username" />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" className="form-control" name="password" />
            </div>

            <button type="submit" className="btn btn-entrar btn-lg">
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
