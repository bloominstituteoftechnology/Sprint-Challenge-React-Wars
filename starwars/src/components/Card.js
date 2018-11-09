import React from 'react';
import './StarWars.css';

const Card = props => {
  return (
    <div className="char-card"
      style={ 
        props.char.gender === 'female' ? {backgroundColor: '#7C3215'} : 
        props.char.gender === 'male' ? {backgroundColor: '#4D3420'} :
        {backgroundColor: '#A3B7CF'} }>
      <h2>{props.char.name}</h2>
      <p>Gender: {props.char.gender !== 'n/a' ? props.char.gender : '-'}</p>
      <p>Birth Year: {props.char.birth_year}</p>
    </div>
  );
}

export default Card;