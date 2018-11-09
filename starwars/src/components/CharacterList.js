import React from "react";
import Character from "./Character";
import "./StarWars.css";

const CharacterList = props => {
  return (
    <div className="characterList">
      {props.characters.map(character => (
        <Character character={character} key={character.name} />
      ))}
    </div>
  );
};

export default CharacterList;
