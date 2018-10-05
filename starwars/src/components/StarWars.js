import React from "react";
import CharacterData from "./Characters";
import "./Characters.css";

const StarWars = props => {
  return (
    <div>
      {props.starwarsChars.map(char => (
        <CharacterData key={char.name} charProps={char} />
      ))}
    </div>
  );
};

export default StarWars;
