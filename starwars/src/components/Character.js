import React from 'react';
import './StarWars.css';

const Character = (props) => {
  return (
    <li className = 'character' id = {props.character.created}></li>
  );
}

export default Character;
