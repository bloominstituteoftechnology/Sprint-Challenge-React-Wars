// Character Template
import React from "react";
import "./StarWars.css";

export default function Character(props) {
  return (
    <div className="character box">
      <h3>Name: {props.character.name}</h3>
      <p>Born in: {props.character.birth_year}</p>
      <img className="image" src={props.character.homeworld} alt="character Homeworld" />
    </div>
  );
}
