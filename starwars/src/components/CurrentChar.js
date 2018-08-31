import React from 'react';

const CurrentChar = props => {
  // create a clickable element that can call the currentChar method passedto it via props
  return (
    <div className="current-char" onClick={() => props.currentChar(props.char.name)}>
      {props.char.name}
    </div>
  );
};

export default CurrentChar;