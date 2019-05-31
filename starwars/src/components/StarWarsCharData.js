import React from "react";
import "./StarWars.css";

const StarWarsCharData = props => {
  return (
    <div className="starWarsCharContent">
      <h1>{props.character.name}</h1>
      <div className="charContentDetails">
        <div className="charDetail">BIRTHDAY:{props.character.birth_year}</div>
        <div className="charDetail">EYE COLOR:{props.character.eye_color}</div>
        <div className="charDetail">GENDER:{props.character.gender}</div>
        <div className="charDetail">
          HAIR COLOR:{props.character.hair_color}
        </div>
        <div className="charDetail">HEIGHT: {props.character.height}</div>
        <div className="charDetail">MASS: {props.character.mass}</div>
        <div className="charDetail">
          SKING COLOR: {props.character.skin_color}
        </div>
      </div>
    </div>
  );
};

export default StarWarsCharData;
