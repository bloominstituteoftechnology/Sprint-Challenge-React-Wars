import React, { Fragment } from "react";
import "./StarWars.css";

const Character = props => {
  // const { char } = props;
  return (
    <div className="character-card">
      <h1>{props.character.name}</h1>
      <div className="basic-info">
        <ul>
          <li>Birth Year: {props.character.birth_year}</li>
          <li className={props.character.eye_color}>
            Eye Color: {props.character.eye_color}
          </li>
          <li>Gender: {props.character.gender}</li>
          <li>Hair Color: {props.character.hair_color}</li>
          <li>Height: {props.character.height}</li>
          <li>Mass: {props.character.mass}</li>
          <li className={props.character.skin_color}>
            Skin Color: {props.character.skin_color}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Character;
