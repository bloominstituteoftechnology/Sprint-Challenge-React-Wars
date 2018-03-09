import React from 'react';
import './CharacterCards.css'

function CharacterCards(props)  {
  const chars = props.char;

  return (
    <div className='CharacterCard'>
      <div className='CharacterCard__title'>
        {/*Name*/}
        <h3 className='CharacterCard__name'><span>{chars.name}</span></h3>
      </div>
      <div className='CharacterCard__body'>
        {/*Personal Info*/}
        <ul className='CharacterCard__info'><span>
          <li>Gender: {chars.gender}</li>
          <li>Born in: {chars.birth_year}</li>
          <li>Height: {chars.height}cm</li>
          <li>Eye Color: {chars.eye_color}</li>
        </span>
        </ul>
        <div className='CharacterCard__vehicles'>
          {/*Starships and vehicles*/}
          <a href={chars.starships}>Associated ships!</a>
        </div>
        <div className='CharacterCard_films'>
          {/*films appeared in*/}
          <a href={chars.films}> films this character appeared in</a>
        </div>
      </div>
    </div>
  )
};

export default CharacterCards