import React from 'react';
import Card from './Card';

import './StarWars.css';

const CardList = function(props) {
  console.log(JSON.stringify(props.starwarsChars));
  return (
    <div className='card-list'>
      {props.starwarsChars.map((charachter) => {
        return (
          <Card charachter={charachter} />
        )
      })}
    </div>
  );
}

export default CardList;