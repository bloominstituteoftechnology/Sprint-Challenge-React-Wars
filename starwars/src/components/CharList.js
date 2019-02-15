import React from "react";
import Char from "./Char";

const CharList = props => {
  return (
    <div className="char-list">
      <div className="list-background" />
      <div className="list-foreground">
        {props.starwarsChars.map((char, index) => (
          <Char
            listNumber={index + 1}
            char={char}
            key={char.created}
            moreInfo={props.moreInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default CharList;
