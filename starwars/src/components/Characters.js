import React from 'react';

const Characters = props => {
  return(
    <div className='characters-container'>
      <div className='characters'>
        <p>{props.charactersInProps.name}</p>
      </div>
      <div className='data'>
        <p>Birthyear: {props.charactersInProps.birth_year}</p>
        <p>Created: {props.charactersInProps.created}</p>
        <p>Edited: {props.charactersInProps.edited}</p>
        <p>Eye Color: {props.charactersInProps.eye_color}</p>
        <p>Gender: {props.charactersInProps.gender}</p>
        <p>Hair Color: {props.charactersInProps.hair_color}</p>
        <p>Height: {props.charactersInProps.height}</p>
        <p>Mass: {props.charactersInProps.mass}</p>
        <p>Skin Color: {props.charactersInProps.skin_color}</p>
      </div>
    </div>
  )
}

export default Characters;
