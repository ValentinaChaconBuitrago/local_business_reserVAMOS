/*
Componente que renderiza cada tienda en un card
*/
import React, { useState } from "react";
import PropTypes from "prop-types";
import StarRatingComponent from "react-star-rating-component";
import Modal from "react-modal";
import "../card.css";

const customStyles = {
  content: {
    height: "300px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
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

  const [modalIsOpen, setIsOpen] = React.useState(false);
  var subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  {
    return (
      <div>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
              {props.item.name}
            </h2>
            <button onClick={closeModal}>close</button>
            <div>{props.item.foodType}</div>
          </Modal>
        </div>
        <div key={props.item._id} style={{ maxWidth: "50ww%" }}>
          <div className="card-header" id="headerCard">
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
                      id="stars"
                      name={
                        props.item._id +
                        "#" +
                        props.item.rating +
                        "#" +
                        props.item.nRatings
                      }
                      starCount={5}
                      value={props.item.rating}
                      emptyStarColor={"#e0e0e0"}
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
                    className="botonCrearReserva"
                    onClick={() => {
                      openModal();
                    }}
                  >
                    Hacer una reserva
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
  }
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
