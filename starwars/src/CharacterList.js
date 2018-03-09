import React from 'react';
import CharacterCard from './CharacterCard';
import './CharacterList.css';

const CharacterList = props => {
  return (
    <div className="CharacterListContainer row flex-wrap space-around">
    {props.characters.map(character => {
      return <CharacterCard key={character.name} character={character} />;
    })}
    </div>
  );
};

export default CharacterList;
