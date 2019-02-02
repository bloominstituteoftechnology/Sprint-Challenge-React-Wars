import React from 'react'

const CurrentCharacter = props => {
    return (
      <div className="current-character" onClick={() => props.showCurrentCharacter(props.char.name)}>
        {props.char.name}
      </div>
    );
  };
 
  export default CurrentCharacter; 