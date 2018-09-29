import React from 'react'

const CurrentChar = props => {
    return (
      <div className="current-character" onClick={() => props.showCurrentChar(props.char.name)}>
        {props.char.name}
      </div>
    );
  };
 
  export default CurrentChar; 