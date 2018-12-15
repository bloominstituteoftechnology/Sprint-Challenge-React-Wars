import React from 'react'
import './StarWars.css'

 const Character = props => {
    return (

        <div className="character-card">


          <span className = 'character-name'>{props.character.name}</span>

          <span>Gender: {props.character.gender}</span>

          <span>Birth Year: {props.character.birth_year}</span>

          <span>Height: {props.character.height}</span>


        </div>

    )
}

 export default Character;