import React from "react";
import "./StarWars.css";

const Card = props => {
  return (
    <div className="character">
      <h2>Name: {props.character.name}</h2>
      <p>Birth Year: {props.character.birth_year}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Height: {props.character.height}</p>
      <p>Weight: {props.character.mass}</p>
      <p>Eye Color: {props.character.eye_color}</p>
      <p>Hair Color: {props.character.hair_color}</p>
      <p>Skin Color: {props.character.skin_color}</p>
      <p>Homeworld: {props.character.homeworld}</p>
      <p>Species: {props.character.species}</p>
      <p>Starships: {props.character.starships}</p>
      <p>Vehichles: {props.character.vehicles}</p>
    </div>
  );
};

export default Card;
