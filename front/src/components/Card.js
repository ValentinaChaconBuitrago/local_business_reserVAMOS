/*
Componente que renderiza cada tienda en un card
*/
import React, { useState } from "react";
import PropTypes from "prop-types";
import StarRatingComponent from "react-star-rating-component";
//Props va a recibir las preguntas de la base de datos
//funcion que actualiza el rating de la tienda
function updateRating(id, rate) {
  fetch("/store/" + id, {
    method: "PUT", // or 'PUT'
    body: rate,
    headers: {
      "Content-Type": "application/json",
    }, // data can be `string` or {object}!
  })
    .then((res) => res.json())
    .then(
      (result) => {},
      // Nota: es importante manejar errores aquí y no en
      // un bloque catch() para que no interceptemos errores
      // de errores reales en los componentes.
      (error) => {
        console.log("fallamos");
      }
    );
}
function onStarClick(nextValue, prevValue, name) {
  let f = name.split("#");
  let id = f[0];
  let nRatings = parseInt(f[2]);
  let old = parseInt(f[1]);
  let newR = (old * nRatings + nextValue) / (nRatings + 1);
  nRatings = nRatings + 1;

  let rate = JSON.stringify({
    rating: newR,
    nRatings: nRatings,
  });
  updateRating(id, rate);
}

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
            <div className="row">
              <div className="col-6">
                <div>A {props.item.dist} Km de distancia</div>
              </div>
            </div>
          </div>
          <div className="card-body text-dark">
            <div className="row">
              <div className="col-8">
                <h5 className="card-title">{props.item.name}</h5>
              </div>
              <div className="col-4">
                <div className="d-flex flex-row-reverse">
                  <div className="p-2">
                    <StarRatingComponent
                      name={
                        props.item._id +
                        "#" +
                        props.item.rating +
                        "#" +
                        props.item.nRatings
                      }
                      starCount={5}
                      value={props.item.rating}
                      onStarClick={() => {}}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p className="card-text">{props.item.description}</p>

                <a>
                  <button
                    type="button"
                    className="btn btn-secondary"
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
              <div className="col-8">A {props.item.dist} Km de distancia</div>
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
            <div className="col-8">
              <h5 className="card-title">{props.item.name}</h5>
            </div>

            <div className="row">
              <div className="col-md-8">
                <p className="card-text">{props.item.description}</p>

                <p className="card-text">Teléfono: {props.item.phone}</p>

                <p className="card-text">Dirección: {props.item.address}</p>
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
            <div>
              <div>
                <div>
                  <p></p>
                  <p className="font-weight-bold">Deja una calificación!</p>
                </div>
                <div>
                  <div className="d-flex flex-row">
                    <div className="p-2">
                      <StarRatingComponent
                        name={
                          props.item._id +
                          "#" +
                          props.item.rating +
                          "#" +
                          props.item.nRatings
                        }
                        starCount={5}
                        value={0}
                        onStarClick={onStarClick.bind(this)}
                      />
                    </div>
                  </div>
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
};

export default Card;
