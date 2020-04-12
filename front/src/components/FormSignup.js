import React from "react";

const FormSignup = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-sm-offset-3"></div>

        <div className="col-sm-4 col-sm-offset-3">
          <h1>
            <span className="fa fa-sign-in"></span> Signup
          </h1>

          <form action="/signup" method="post">
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" name="username" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" />
            </div>

            <button type="submit" className="btn btn-warning btn-lg">
              Signup
            </button>
          </form>
          <hr />

          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
          <p>
            Or go <a href="/">home</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormSignup;