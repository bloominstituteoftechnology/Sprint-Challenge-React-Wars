import React from 'react';
import './CardList.css';
import Card from './Card.js';

const CardList = props => {
  return (
    <div>
      <ul className="starwars-charList">
        {props.charsList.map(character =>
          <Card key={character.name}
                charInfo={character} />
        )}
      </ul>
    </div>
  );
};

export default CardList;
