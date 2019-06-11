import React from "react";
import Char from "./Char";

const CharacterList = props => {
  return (
    <div className='list'>
      {props.chars.map(char => {
        return (
          <Char character={char} />
        );
      })}
    </div>
  );
};

export default CharacterList;
