import React from 'react';
import Character from './Character';

export const CharacterList = (props) => {
  return (
    <div>
      {props.character.map((character => {
        return <Character key={character.id} character={character} />
      }))}
    </div>
  )
};
