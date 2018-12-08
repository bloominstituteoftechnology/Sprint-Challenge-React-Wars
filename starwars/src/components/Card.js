import React from 'react'
import './StarWars.css'

const Card = props => {
    return (
        <div className="card">
          <h3>{props.character.name}</h3>
          <p>Height: {props.character.height}</p>
          <p>Mass: {props.character.mass}</p>
          <p>Hair Color: {props.character.hair_color}</p>
          <p>Skin Color: {props.character.skin_color}</p>
          <p>Eye Color: {props.character.eye_color}</p>
          <p>Birth Year: {props.character.birth_year}</p>
          <p>Gender: {props.character.gender}</p>
        </div>
    )
}

export default Card