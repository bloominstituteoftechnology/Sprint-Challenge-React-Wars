import React from "react";

import "./StarWars.css";

const Character = props => {
  return (
    <div className="card">
      <h2>{props.character.name}</h2>
      <ul>
        <li><strong>Gender:</strong> {props.character.gender}</li>
        <li><strong>Birth Year:</strong> {props.character.birth_year}</li>
        <li><strong>Height:</strong> {props.character.height}</li>
        <li><strong>Mass:</strong> {props.character.mass}</li>
        <li><strong>Hair Color:</strong> {props.character.hair_color}</li>
        <li><strong>Skin Color:</strong> {props.character.skin_color}</li>
        <li><strong>Eye Color:</strong> {props.character.eye_color}</li>
      </ul>
    </div>
  );
};

export default Character;
