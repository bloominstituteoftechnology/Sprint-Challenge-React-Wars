import React from 'react';
import './StarWars.css';

import CharacterDisplay from './CharacterDisplay';

const CharacterList = props => {
  return(
    <div className="character-list">
      {props.characters.map((character, pos) => <CharacterDisplay key={pos} id={pos} character={character} selectChar={props.selectChar}/>)}
    </div>
  );
};

export default CharacterList;
