import React from 'react'
import './Character.css'

const Character = props => {
    return(
        <div className="main-character">
            <h1 className= "Char-name"> {props.characterData.name}</h1>
            <p className= "Stat">Gender: {props.characterData.gender}</p>
            <p className= "Stat">Birth Year: {props.characterData.birth_year}</p>
            <p className= "Stat">Skin Color: {props.characterData.skin_color}</p>
            <p className= "Stat">Hair Color: {props.characterData.hair_color}</p>
            <p className= "Stat">Height: {props.characterData.height}</p>
        </div>
    )
}
export default Character;