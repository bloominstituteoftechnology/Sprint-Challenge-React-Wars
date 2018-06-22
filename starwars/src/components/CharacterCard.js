import React  from 'react';
import Character from './Character'
import './StarWars.css'

const CharacterCard = props => {
  return (
    <div>
      {props.characters.map(char => {
        return (
          <Character
            key={Math.random()}
            oneChar={char}
          />
        );
      })}
    </div>
  );
};

export default CharacterCard
