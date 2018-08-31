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
       <div className="return" onClick={props.showNextPage}>Next</div>
       <div className="return" onClick={props.showPrevPage}>Previous</div>
    </div>
  );
};

export default CharList;