import React from "react";
import Char from "./Char";

const CharsList = props => {
  return (
    <div>{props.chars.map(char => <Char key={char.name} swChar={char} />)}</div>
  );
};

export default CharsList;
