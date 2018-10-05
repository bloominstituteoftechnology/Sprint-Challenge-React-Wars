import React from "react";
import Character from "./Character";
import "./StarWars.css";

const CharacterContainer = props => {
  return (
    <div className="characterContainer">
      {props.characters.map((character, index) => {
        return (
          <div className="characterMap">
            <Character index={index} character={character} />
          </div>
        );
      })}
    </div>
  );
};

export default CharacterContainer;
