import React from 'react';

import './StarWars.css';

const Card = function (props) {
  return (
    <div className='card' key={props.charachter.created}>
      <div className='main-attr'>
        <h3 className='char-name'>{props.charachter.name}</h3>
        <p className='char-born'>b. {props.charachter.birth_year}</p>
      </div>

      <div className='char-attributes'>
        <p className='char-attr'>Gender: {props.charachter.gender}</p>
        <p className='char-attr'>Height: {props.charachter.height}</p>
        <p className='char-attr'>Mass: {props.charachter.mass}</p>
        <p className='char-attr'>Hair Color: {props.charachter.hair_color}</p>
        <p className='char-attr'>Skin Color: {props.charachter.skin_color}</p>
        <p className='char-attr'>Eye Color: {props.charachter.eye_color}</p>
      </div>
    </div>
  );
}

export default Card;