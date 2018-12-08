import React from 'react';
import Char from './Char';

import './StarWars.css';

const CharsList = (props) => {
  return (
    <div className="charsList">{props.chars.map( char => <Char character={char} key={char.created}/> )}</div>
  );
};

export default CharsList;