import React from "react";

import StarWarCharacters from "./StarWarCharacters";

const characterList = props => {
  return (
    <div>
      {props.starwarsChars.map(char => (
        <StarWarCharacters char={char} />
      ))}
    </div>
  );
};

export default characterList;
