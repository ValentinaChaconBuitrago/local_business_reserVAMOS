import React, { useState, useEffect } from "react";
import FormLogin from "./FormLogin.js";
import Profile from "./Profile.js";
import FormAddStore from "./FormAddStore.js";
import Nav from "../Nav.js";
import NavUser from "../NavUser.js";

const Login = () => {
  const [user, setUser] = useState(null);

  const onLogout = () => {
    fetch("/logout").then(() => setUser(null));
  };

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((user) => setUser(user));
  }, []);

  return (
    <div>
      {!user ? (
        <div>
          <Nav></Nav>
          <FormLogin></FormLogin>
        </div>
      ) : (
        <div>
          <NavUser></NavUser>
          <div className="row">
            <div className="col-sm-3 col-sm-offset-3"></div>
            <div className="col-sm-3 col-sm-offset-3">
              <Profile
                username={user.username}
                _id={user._id}
                password={user.password}
              ></Profile>
            </div>
            <div className="col-sm-3 col-sm-offset-3">
              <button onClick={onLogout} className="btn btn-primary">
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
