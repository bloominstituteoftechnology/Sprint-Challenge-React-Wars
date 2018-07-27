import React from 'react'
import './StarWars.css'

const CharacterContainer = props => {
    return (
        <div>
            {props.starwarsChars.map(character => {
                return (
                    <div>
                        <h2>{character.name}</h2>
                        <ul>
                            <li>Gender: {character.gender}</li>
                            <li>Birth Year: {character.birth_year}</li>
                            <li>Eye Color: {character.eye_color}</li>
                            <li>Hair Color: {character.hair_color}</li>
                            <li>Height: {character.height}</li>
                            <li>Skin Color: {character.skin_color}</li>
                            <li>Mass: {character.mass}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default CharacterContainer;