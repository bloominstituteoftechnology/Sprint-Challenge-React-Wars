import React from 'react';
import Characters from './Characters';
import './StarWars.css';

const CharactersList = props => {
  return <div className="container">
      {props.starwarsChars.map((char, index) => (
        <Characters starwarsChars={char} key={index} />
      ))}
    </div>;
}
export default CharactersList;