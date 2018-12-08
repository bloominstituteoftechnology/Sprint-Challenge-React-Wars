import React from "react";
import './StarWars.css'
import Card from './Card'

const CardContainer = props => {
  return (
    <div className="container">
      {props.charArray.map(char => (
        <Card 
          key={char.name}
          character={char}
        />
      ))}
    </div>
  );
};

export default CardContainer;
