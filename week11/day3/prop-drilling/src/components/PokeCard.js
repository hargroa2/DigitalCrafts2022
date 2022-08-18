import React, { useState } from "react";
import "../App.css";

export default function PokeCard(props) {
  const [front, setFront] = useState(true);
  return (
    <div className="cardContainer">
      <div className="card">
        <h2>{props.pokemon?.name}</h2>
        {/* <button>Delete</button> */}
        <h3>{props.pokemon?.hp}</h3>
        <img
          src={
            front
              ? props?.pokemon?.sprites?.front
              : props?.pokemon?.sprites?.back
          }
          alt=""
        />
      </div>
    </div>
  );
}
