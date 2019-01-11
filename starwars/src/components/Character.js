import React from 'react'
import './StarWars.css'

const Character = props => {
    return(
        <div className="main-character">
            <h1 className= "char-name"> {props.characterData.name}</h1>
            <p className= "stat">Gender: {props.characterData.gender}</p>
            <p className= "stat">Birth Year: {props.characterData.birth_year}</p>
            <p className= "stat">Skin Color: {props.characterData.skin_color}</p>
            <p className= "stat">Hair Color: {props.characterData.hair_color}</p>
            <p className= "stat">Height: {props.characterData.height}</p>
        </div>
    )
}
export default Character;