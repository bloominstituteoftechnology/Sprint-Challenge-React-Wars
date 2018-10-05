import React from "react";
import "./StarWars.css";

import StarWarCharacters from "./StarWarCharacters";

const characterList = props => {
  return (
    <div className="charContainer">
      {props.starwarsChars.map(char => (
        <StarWarCharacters char={char} />
      ))}
    </div>
  );
};

export default characterList;
