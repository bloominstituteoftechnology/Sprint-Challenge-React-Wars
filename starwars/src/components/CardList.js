import React from 'react';
import Card from './Card.js';

const CardList = props => {
  return (
    <div>
      <ul>
        {props.charsList.map(character =>
          <Card key={character.name}
                charInfo={character} />
        )}
      </ul>
    </div>
  );
};

export default CardList;
