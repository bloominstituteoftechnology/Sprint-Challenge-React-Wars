import React from 'react';
import CardComponent from './CardComponent';
import './StarWars.css';

// This component will receive the array of characters
// and generates a new CardComponent for each character

function CardList(props) {
  return <div className="allCards">{props.chars.map((char, index) =>

      <CardComponent
        key={index}
        name={char.name}
        gender={char.gender}
        hair_color={char.hair_color}
        eye_color={char.eye_color}
        height={char.height}
        mass={char.mass}
        skin_color={char.skin_color}


      />

    )};
    </div>

  };

export default CardList;
