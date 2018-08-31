import React from 'react';

const CharList = props => {
  // map over the characters and teturn the element data
  return (
    <div>

      {props.chars.map((char, index) => {
        return <CurrentChar char={char} key={index} currentChar={props.currentChar} />;
      })};
    </div>
  );
};

export default CharList;