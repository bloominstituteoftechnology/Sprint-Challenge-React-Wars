import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = (props) => {
  return (
    <div className="character-list">
      {props.characters.map(character =>
        <Character
          key={character.created}
          bio={character}
        />
      )}
    </div>
  );
};

export default CharacterList;
