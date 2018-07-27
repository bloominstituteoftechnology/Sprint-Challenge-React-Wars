import React from 'react';
import './StarWars.css';

import CharacterDisplay from './CharacterDisplay';

const CharacterList = props => {
  return(
    <div className="character-list">
      {props.characters.map(character => <CharacterDisplay character={character} />)}
    </div>
  );
};

export default CharacterList;
