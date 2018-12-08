import React from 'react';
import Char from './Char';

const CharsList = (props) => {
  return (
    <div>{props.chars.map( char => <Char character={char} key={char.created} /> )}</div>
  );
};

export default CharsList;