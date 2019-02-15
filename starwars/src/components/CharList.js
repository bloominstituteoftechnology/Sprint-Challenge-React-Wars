import React from "react";
import Char from "./Char";

const CharList = props => {
  return (
    <div className="char-list">
      {props.starwarsChars.map((char, index) => (
        <Char listNumber={index + 1} char={char} key={char.created} />
      ))}
    </div>
  );
};

export default CharList;
