import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="well">
            <h3>
              <span className="fa fa-user"></span> Información del usuario
            </h3>

            <p>
              <strong>Usuario</strong>: {props.username}
              <br />
              <strong>Contraseña</strong>: *****
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  _id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
export default Profile;
