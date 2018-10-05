import React from 'react';
import CharacterCard from './CharacterCard.js';

const CharacterList = (props) => {
  return (
    <div className='characterList'>
      {props.characters.map(character => {
        return <CharacterCard
          key={character.created}
          character={character} />
      })}
    </div>
  )
}

export default CharacterList;
