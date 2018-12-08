import React from 'react';
import Character from './Characters';
import './StarWars.css';

const CharsList = (props) => {
  const { starwars } = props;

  return (
    <div className='cards-container'>
      {starwars.map(character =>
        <Character
          character={character}
          key={character.created}
        />)}
    </div>
  );
}

export default CharsList;