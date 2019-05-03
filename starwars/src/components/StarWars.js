import React from 'react';
import Character from './Character';

const StarWars = props => {
  return (
    <div>
      {props.starwarsChars.map(char => (
        <Character
          key={char.name}
          char={char}
        />
      ))};
    </div>
  );
};

export default StarWars;