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

const Questions = (props) => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  useEffect(() => {
    const geo = navigator.geolocation.getCurrentPosition(function success(pos) {
      var crd = pos.coords;
      setLat(crd.latitude);
      setLon(crd.longitude);
    });
  }, []);
  console.log("PROS", props);
  return (
    <div>
      <ul>
        {props.stores.map((item) => (
          <div
            className="card border-dark mb-3"
            key={item._id}
            style={{ maxWidth: "50ww%" }}
          >
            <div className="card-header">
              A {calc(item.position.lat, lat, item.position.lng, lon)} Km de
              distancia
            </div>
            <div className="card-body text-dark">
              <h5 className="card-title">{item.name}</h5>
              <div className="row">
                <div className="col-md-8">
                  <p className="card-text">{item.description}</p>
                </div>
                <div className="col-md-4">
                  <div className="embed-responsive embed-responsive-16by9">
                    <img
                      alt="Card image cap"
                      className="card-img-top embed-responsive-item"
                      src={item.image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

Questions.propTypes = {
  stores: PropTypes.array.isRequired,
};

export default Questions;
