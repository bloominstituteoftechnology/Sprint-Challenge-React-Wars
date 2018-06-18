import React from "react";
import CharName from "./CharName";

const CharsList = props => {
  return (
    <div>{props.chars.map(charName => <CharName key={CharName.name} swChar={charName} />)}</div>
  );
};

export default CharsList;