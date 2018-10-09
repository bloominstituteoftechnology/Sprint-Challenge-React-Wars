import React from 'react';

const CharacterPage = props => {
  return (
    <div className='Character'>
      <h1 className='CharacterName'>{props.charstat.name}</h1>
      <h2>Birth Year: {props.charstat.birth_year}</h2>
      <h2>Gender: {props.charstat.gender}</h2>
      <h2>Eye Color: {props.charstat.eye_color}</h2>
	  <h2>Hair Color: {props.charstat.hair_color}</h2>
	  <h2>Skin Color: {props.charstat.skin_color}</h2>
      <h2>Height: {props.charstat.height}</h2>
      <h2>Mass: {props.charstat.mass}</h2>
	  <h2>Homeworld: {props.charstat.homeworld}</h2>
	  <h2>Featured in(films): {props.charstat.films}</h2>
    </div>
  )
}

export default CharacterPage;