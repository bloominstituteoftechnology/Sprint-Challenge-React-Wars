import React from 'react';

const Character = props => {
  return (
    <div className="character">
      <h3>{props.character.name}</h3>
    </div>
  )
}

export default Character;