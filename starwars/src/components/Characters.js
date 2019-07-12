import React from 'react';
import Character from './Character';

const Characters = props => {
  return (
    <div>
      {props.characters.map((character, index) => (
        <Character character={character} key={index} />
      ))}
    </div>
  );
};

export default Characters;
