import React from "react";
import "./StarWars.css";

const Characters = props => {
  return (
    <div className="individual">
      <h1 className="bigName">{props.char.name}</h1>
      <p>{props.char.gender}</p>
      <p>{props.char.height}</p>
      <p>{props.char.hair_color}</p>
      <p>{props.char.eye_color}</p>
      <p>{props.char.birth_year}</p>
    </div>
  );
};

export default Characters;
