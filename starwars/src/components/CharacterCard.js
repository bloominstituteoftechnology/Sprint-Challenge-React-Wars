import React from "react";
import CharacterFilmGroup from "./CharacterFilmGroup";

const CharacterCard = props => {
  return (
    <div className="card">
      CHARACTER CARD
      <h2>{props.character.name}</h2>
      <div className="character-stats">
        <p>Gender: {props.character.gender}</p>
        <p>Born: {props.character.birth_year}</p>
        <p>Home World: {props.character.homeworld}</p>
      </div>
      <CharacterFilmGroup />
    </div>
  );
};

export default CharacterCard;
