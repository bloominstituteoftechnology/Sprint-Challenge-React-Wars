import React from 'react';
import CharCard from './CharCard';

import './StarWars.css';

const CharComponents = props => {
  return (
    <div className="char-components">
      {props.chars.map(char => (
        <CharCard key={char.name} char={char} />
      ))}
    </div>
  );
};
export default CharComponents;
