import React from "react";
import "./StarWars.css";

const StarWars = props => {
  return (
    <div className="starwars">
      <h3>{props.character.name}</h3>
      <p> birthdate: {props.character.birth_year}</p>
      <p> gender: {props.character.gender}</p>
      <p> height: {props.character.height} cm</p>
      <p> hair color: '{props.character.hair_color}'</p>
    </div>
  );
}; // end todo component

export default StarWars;
