import React from "react";
import "./StarWars.css";

const CharacterCard = props => {
  return (
    <div className="card" id={props.count}>
      <h2>{props.char.name}</h2>
      <p>
        <strong>Birth Year:</strong> {props.char.birth_year}
      </p>
      <p>
        <strong>Gender:</strong> {props.char.gender}
      </p>
      <p>
        <strong>Weight:</strong> {props.char.mass}
      </p>
      <p>
        <strong>Height:</strong> {props.char.height}
      </p>
      <p>
        <strong>Skin Color:</strong> {props.char.skin_color}
      </p>
      <p>
        <strong>Eye Color:</strong> {props.char.eye_color}
      </p>
      <p>
        <strong>Hair Color:</strong> {props.char.hair_color}
      </p>
    </div>
  );
};

export default CharacterCard;
