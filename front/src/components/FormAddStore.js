import React from "react";

const FormAddStore = () => {

    return (
    <div className="container">
      <div className="row">

        <div className="col-sm-4 col-sm-offset-3">
        </div>

        <div className="col-sm-4 col-sm-offset-3">
          <form action="/addStore" method="post">
              <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="name" />
              </div>
              <div className="form-group">
                  <label>Description</label>
                  <input type="text" className="form-control" name="description" />
              </div>
              <div className="form-group">
                  <label>Address</label>
                  <input type="text" className="form-control" name="address" />
              </div>
              <div className="form-group">
                  <label>Image</label>
                  <input type="text" className="form-control" name="image" />
              </div>

              <button type="submit" className="btn btn-info btn-lg">Add Business</button>
              <hr/>
          </form>
        </div>
      </div>
    </div>
      );
};

export default FormAddStore;
