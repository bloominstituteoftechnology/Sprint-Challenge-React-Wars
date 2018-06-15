import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterList = props => {
  return(
    <ul>
      {props.characters.map(character => {
        return <CharacterCard 
          key={character.id} 
          id={character.id}
          characterData={character}
        />;
      })}
    </ul>
  );
};

export default CharacterList;