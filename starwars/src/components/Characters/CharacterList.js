import React from 'react';
import Character from './Character';

const CharacterList = props => {
  
  return (
    <div>
        {props.list.map(character => {
            return <Character key={character.edited} name={character.name} picture={character.homeworld} selectProf={props.selectProf} />
        })};

    </div>
  );
}

export default CharacterList
