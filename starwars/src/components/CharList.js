import React from 'react';
import Char from './Char.js';
import './StarWars.css'

const CharList = props => {
  return(
      <section className="Characters">
        {props.list.map(characterData => {
          return <Char data={characterData} />
        })}
      </section>
    );
}

export default CharList;
