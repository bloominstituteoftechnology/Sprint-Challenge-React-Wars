import React from 'react';

const CharacterCard = props => {
  console.log("here", props)
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
};

export default CharacterCard;
