import React from 'react';
import Character from './Character';
import './StarWars.css';

const StarList = (props) => {
  const { starwars } = props;

  return (
    <div>
      {starwars.map(character =>
        <Character
          character={character}
          key={character.created}
        />)}
    </div>
  );
}

export default StarList;