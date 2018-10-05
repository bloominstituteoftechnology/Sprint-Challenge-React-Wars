import React from 'react';
import Card from './Card';
import './StarWars.css';

const InfoCards = props => {
  return (
    <div className="infoCard">
      {props.starwarsChars.map(character => {
        return <Card key={character.created} characterInfo={character} />;
      })}
    </div>
  );
};

export default InfoCards;
