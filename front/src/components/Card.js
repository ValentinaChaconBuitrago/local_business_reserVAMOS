import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//Props va a recibir las preguntas de la base de datos
function calc(lat1, lat2, lon1, lon2) {
  console.log("CALC", lat1, lat2, lon1, lon2);
  var R = 6371e3; // metres
  var φ1 = (lat1 * Math.PI) / 180;
  var φ2 = (lat2 * Math.PI) / 180;
  var Δφ = ((lat2 - lat1) * Math.PI) / 180;
  var Δλ = ((lon2 - lon1) * Math.PI) / 180;

  var a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  var d = R * c;

  d = d / 1000;
  d = d * 10;
  d = d | 0;
  return d / 10;
}
function details() {}

const Card = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  if (!isClicked) {
    return (
      <div>
        <div
          className="card border-dark mb-3"
          key={props.item._id}
          style={{ maxWidth: "50ww%" }}
        >
          <div className="card-header">
            A{" "}
            {calc(
              props.item.position.lat,
              props.lat,
              props.item.position.lng,
              props.lon
            )}{" "}
            Km de distancia
          </div>
          <div className="card-body text-dark">
            <h5 className="card-title">{props.item.name}</h5>
            <div className="row">
              <div className="col-md-8">
                <p className="card-text">{props.item.description}</p>

                <a>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={() => {
                      setIsClicked(true);
                    }}
                  >
                    Ver detalles
                  </button>
                </a>
              </div>
              <div className="col-md-4">
                <div className="embed-responsive embed-responsive-16by9">
                  <img
                    alt="Card image cap"
                    className="card-img-top embed-responsive-item"
                    src={props.item.image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (isClicked) {
    return (
      <div>
        <div
          className="card border-dark mb-3"
          key={props.item._id}
          style={{ maxWidth: "50ww%" }}
        >
          <div className="card-header">
            <div className="row">
              <div className="col-8">
                A{" "}
                {calc(
                  props.item.position.lat,
                  props.lat,
                  props.item.position.lng,
                  props.lon
                )}{" "}
                Km de distancia
              </div>
              <div className="col-4">
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  onClick={() => {
                    setIsClicked(false);
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="card-body text-dark">
            <h5 className="card-title">{props.item.name}</h5>
            <div className="row">
              <div className="col-md-8">
                <p className="card-text">{props.item.description}</p>

                <p className="card-text">{props.item.phone}</p>

                <p className="card-text">{props.item.address}</p>
              </div>
              <div className="col-md-4">
                <div className="embed-responsive embed-responsive-16by9">
                  <img
                    alt="Card image cap"
                    className="card-img-top embed-responsive-item"
                    src={props.item.image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
};

export default Card;
