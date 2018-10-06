import React from "react";
import "./StarWars.css";

const StarWars = props =>
  props.characters.map(character => (
    <div key={character.created} className={`profile ${character.name}`}>
      <h2>{character.name}</h2>
      <ul>
        <li>Gender: {character.gender}</li>
        <li>
          Height: {character.height}
          cm
        </li>
        <li>
          Weight: {character.mass}
          kg
        </li>
        <li>Year Born: {character.birth_year}</li>
      </ul>
    </div>
  ));

export default StarWars;
