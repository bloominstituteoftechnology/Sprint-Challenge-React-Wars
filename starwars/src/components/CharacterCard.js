import React from 'react';

const CharacterCard = props => {
  return (
    <div key={props.id}>
      <h2>name: {props.name}</h2>
    </div>
  );
};

export default CharacterCard;
