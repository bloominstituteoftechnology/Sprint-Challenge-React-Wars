import React from 'react';
import './StarWars.css';
import Card from './card';

const Cards = props => {
    return (
      <div className="container">
        {props.starwarsChars.map(makeCard => (
          <Card eachCard={makeCard} />
        ))}
      </div>
    );
  };
  

export default Cards;
