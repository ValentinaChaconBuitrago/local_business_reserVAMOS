import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div className="container">
    <h1></h1>
    <div className="row">
      <div className="col-md-4"></div>

        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-iconno">
                <span className="fa fa-user"></span>
              </div>
              <div className="card-title-c align-self-center">

                <h2 className="title-c">Perfil</h2>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="well">
            <h2 className="title-d">ID: {props._id}</h2>
            <br/>
            <h2 className="title-d">Usuario: {props.username}</h2>
            <br/>
            <h2 className="title-d">Fecha de Nacimiento: {props.date}</h2>
            <br/>
            <h2 className="title-d">Celular: {props.phone}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  _id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
export default Profile;
