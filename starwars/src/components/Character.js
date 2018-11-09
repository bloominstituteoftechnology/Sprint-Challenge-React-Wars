import React, { Fragment } from "react";
import "./StarWars.css";

const Character = props => {
  const { char } = props;
  return (
    <div className="character">
      <h1>{char.name}</h1>
      <div className="basic-info">
        <ul>
          <li>Birth Year: {char.birth_year}</li>
          <li>Eye Color: {char.eye_color}</li>
          <li>Gender: {char.gender}</li>
          <li>Hair Color: {char.hair_color}</li>
          <li>Height: {char.height}</li>
          <li>Mass: {char.mass}</li>
          <li>Skin Color: {char.skin_color}</li>
        </ul>
      </div>
    </div>
  );
};

export default Character;
