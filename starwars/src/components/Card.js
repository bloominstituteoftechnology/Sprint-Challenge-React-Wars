import React from 'react';

import './StarWars.css';

const Card = function (props) {
  return (
    <div className='card' key={props.character.created}>
      <div className='main-attr'>
        <h3 className='char-name'>{props.character.name}</h3>
        <p className='char-born'>b. {props.character.birth_year}</p>
      </div>

      <div className='char-attributes'>
        <p className='char-attr'>Gender: {props.character.gender}</p>
        <p className='char-attr'>Height: {props.character.height}</p>
        <p className='char-attr'>Mass: {props.character.mass}</p>
        <p className='char-attr'>Hair Color: {props.character.hair_color}</p>
        <p className='char-attr'>Skin Color: {props.character.skin_color}</p>
        <p className='char-attr'>Eye Color: {props.character.eye_color}</p>
      </div>
    </div>
  );
}

export default Card;