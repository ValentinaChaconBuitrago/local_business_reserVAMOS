import React from "react";
import NavUser from "../NavUser.js";

const FormAddStore = () => {
  return (
    <div>
      <NavUser></NavUser>
      <div className="container">
      <div className="row">
      <div className="col-sm-4 col-sm-offset-3"></div>

        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-iconno">
                <span className="fa fa-shopping-cart"></span>
              </div>
              <div className="card-title-c align-self-center">
                <h2 className="title-c">Agregar un Establecimiento</h2>
              </div>
            </div>
          </div>
        </div>


      </div>





        <div className="row">
          <div className="col-sm-4 col-sm-offset-3"></div>

          <div className="col-sm-4 col-sm-offset-3">
            <form action="/addStore" method="post">
              <div className="form-group">
                <label>Nombre</label>
                <input
                  placeholder="Tienda de Don Luis"
                  type="text"
                  className="form-control"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label>Dirección</label>
                <input
                  placeholder="calle 78# 7-98"
                  type="text"
                  className="form-control"
                  name="address"
                />
              </div>
              <div className="form-group">
                <label>Teléfono</label>
                <input
                  placeholder="3193970054"
                  type="text"
                  className="form-control"
                  name="phone"
                />
              </div>
              <div className="form-group">
                <label>URL de la imagen</label>
                <input
                  placeholder="https://blog.rappi.com/masa.jpg"
                  type="text"
                  className="form-control"
                  name="image"
                />
              </div>
              <div className="form-group">
                <label>Descripción</label>
                <textarea
                  placeholder="Minimercado de frutas y verduras"
                  className="form-control"
                  name="description"
                  rows="4"
                  cols="40"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-info btn-lg">
                Agregar
              </button>
              <hr />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddStore;
