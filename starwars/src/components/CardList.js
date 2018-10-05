import React from 'react';
import Card from './Card';

import './StarWars.css';

const CardList = function (props) {
  console.log(JSON.stringify(props.starwarsChars));
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