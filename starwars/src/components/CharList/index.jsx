import React from "react";
import CurrentChar from "../CurrentChar";

const CharList = props => {
  return (
    <div>
      {props.chars.map((char, index) => {
        return (
          <CurrentChar
            char={char}
            key={index}
            showCurrentChar={props.showCurrentChar}
          />
        );
      })}
      <div className="pWrapper">
        <div className="return prev" onClick={props.showPrevPage}>
          Previous
        </div>
        <div className="return next" onClick={props.showNextPage}>
          Next
        </div>
      </div>
    </div>
  );
};

export default CharList;
