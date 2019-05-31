import React from "react";
import "./StarWars.css";
import Character from "./Character";

function CharacterList(props) {
  return (
    <div className="characterList-wrapper">
      {props.starwarsChars.map(char => {
        return <Character char={char} />;
      })}
    </div>
  );
}

export default CharacterList;
