import React from "react";
import NavUser from "../NavUser.js";

const FormAddStore = () => {

return (
  <div>
  <NavUser></NavUser>
  <div className="container">
    <h1>
      <span className="fa fa-shopping-cart"></span> Add a business
    </h1>
    <div className="row">
      <div className="col-sm-4 col-sm-offset-3"></div>

      <div className="col-sm-4 col-sm-offset-3">
        <form action="/addStore" method="post">
          <div className="form-group">
            <label>Name</label>
            <input
              placeholder="Tienda de Don Luis"
              type="text"
              className="form-control"
              name="name"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              placeholder="calle 78# 7-98"
              type="text"
              className="form-control"
              name="address"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              placeholder="3193970054"
              type="text"
              className="form-control"
              name="phone"
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              placeholder="https://blog.rappi.com/masa.jpg"
              type="text"
              className="form-control"
              name="image"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Minimercado de frutas y verduras"
              className="form-control"
              name="description"
              rows="4"
              cols="40"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-info btn-lg">
            Add Business
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
