import React from "react";
import CurrentChar from './CurrentChar';

const CharList = props => {
  return (
    <div>
      {props.chars.map((char, index) => {
        return <CurrentChar char={char}
                                 key={index}
                                 showCurrentChar={props.showCurrentChar} />;
      })}
    </div>
  );
};

export default CharList;