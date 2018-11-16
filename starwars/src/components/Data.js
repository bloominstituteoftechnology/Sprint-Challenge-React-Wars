import React from 'react';
import './StarWars.css';

function Data(props) {
  return (
    <div>
      {props.getCharacters}
    </div>
  )
}
export default Data;
