import React from 'react';
import StarwarsChar from './CharCard';

function CharCardsList(props) {
  return (
    <div className="char-cards-container">
      {props.starwarsChars.map((starwarsChar) => (
        <StarwarsChar starwarsChar={starwarsChar} key={starwarsChar.name} />
      ))}
    </div>
  );
}

export default CharCardsList;
