import React from 'react'
import styles from './StarWars.css'


const Character = props =>{
    return(
        <div className = "character-list-container">
            <ul className = "character-list">
                <li className = "character-name">{props.character.name}</li>
                <li>Year of birth: {props.character.birth_year}</li>
                <li>Eye color: {props.character.eye_color}</li>
                <li>Gender: {props.character.gender}</li>
                <li>Hair color: {props.character.hair_color}</li>
                <li>Height: {props.character.height}</li>
                <li>Mass: {props.character.mass}</li>
                <li>Skin color: {props.character.skin_color}</li>
            </ul>
        </div>
    )
}

export default Character;