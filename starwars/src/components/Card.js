import React from 'react';
import './StarWars.css';
import CardCharInfo from './CardCharInfo';

const Card = props => {
  return (
    <div className="card-container">
      <h2>{props.name}</h2>

      <div className="char-info__img-container">
        <img src={props.imgName} alt=""/>
      </div>

      <div className="char-info__title-container">
        <h3>Character Info:</h3>
        <p className="char-info__item home">
          <span>Home World:</span>
          <a href={props.homeworld} target="_blank">{` Visit ${props.name}'s Home World`}</a>
        </p>
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