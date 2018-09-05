import React from 'react';
import Card from './Card';
import './StarWars.css';

const CharacterCards = props => {
  return (
    <div className="character-cards">
      {props.characters.map(character => (
        <Card 
          key={character.created}
          character={character}
        />
      ))}
    </div>
  );
};

export default CharacterCards;