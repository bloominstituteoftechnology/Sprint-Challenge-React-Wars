import React from 'react';
import Card from './Card';

import './StarWars.css';

const CardList = function (props) {
  return (
    <div className='card-list'>
      {props.starwarsChars.map((character) => {
        return (
          <Card character={character} />
        )
      })}
    </div>
  );
}

export default CardList;