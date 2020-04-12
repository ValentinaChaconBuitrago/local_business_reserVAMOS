import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Store = (props) => {
  const [tienda, setTienda] = useState([]);

  fetch("../shop/" + props.match.params._id)
    .then((res) => res.json())
    .then((result) => {
      console.log("RESUP", result);
      setTienda(result[0]);

      console.log("TIENDA", tienda.name);
    });
  return (
    <div>
      <img src={tienda.image} style={{ maxHeight: "500px" }}></img>
      <h2>{tienda.description}</h2>
    </div>
  );
};

Store.propTypes = {
  _id: PropTypes.string.isRequired,
};
export default Store;
