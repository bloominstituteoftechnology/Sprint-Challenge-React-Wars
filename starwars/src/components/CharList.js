import React from 'react';
import Chars from './Chars';
import './StarWars.css'

function CharList(props) {
  return (
    <div className='character'>
      {props.characters.map(character => <Chars character={character} />)}
    </div>
  );
}

export default CharList;