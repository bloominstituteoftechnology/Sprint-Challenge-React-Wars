import React from 'react';
import CardComponent from './CardComponent';
import './StarWars.css';

// This component will receive the array of characters
// and generates a new CardComponent for each character

function CardList(props) {
  return <div className="allCards">{props.chars.map((char, index) =>

      <CardComponent
        char={char}


      />

    )};
    </div>

  };

export default CardList;
