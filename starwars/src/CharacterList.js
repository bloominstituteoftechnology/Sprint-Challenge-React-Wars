import React from 'react';
import CharacterCard from './CharacterCard.js';
import './CharacterList.css';

const CharacterList = props => {
  return (
    <div>
      {props.people.map(person => {
        return <CharacterCard person={person} />
      })}
    </div>
  );
};

export default CharacterList;