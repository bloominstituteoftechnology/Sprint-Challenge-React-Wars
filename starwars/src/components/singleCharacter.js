import React from 'react';

export const TheCharacterName = props => {
  return (
    <div className="characters">
      <li key={props.name}>{props.name}</li>
    </div>
  );
};
