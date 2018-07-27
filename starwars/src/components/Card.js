import React from 'react';
import './StarWars.css';
import CardCharInfo from './CardCharInfo';

const Card = props => {
  return (
    <div className="card-container">
      <h2>{props.name}</h2>

      <div className="char-info__title-container">
        <h3>Character Info:</h3>
        <p>{`Home World: ${props.homeworld}`}</p>
      </div>
      
      <CardCharInfo 
        name={props.name}
        birthYear={props.birthYear}
        gender={props.gender}
        skinColor={props.skinColor}
        hairColor={props.hairColor}
        eyeColor={props.eyeColor}
        height={props.height}
        mass={props.mass}
      />
    </div>
  );
};


export default Card;