import React from 'react';
import Character from './Character';

const StarList = props => {
  const { starwars } = props;

  return (
    <div>
      {starwars.map(character =>
        <Character
          character={character}
        />)}
    </div>
  );
}

export default StarList;