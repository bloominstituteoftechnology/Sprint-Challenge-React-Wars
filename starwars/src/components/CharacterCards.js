import React from 'react';
import Character from './Character'
import './StarWars.css'

const CharacterCards = (props) => {
    return (
        props.characters.map(character => {
            return (
                <Character 
                key={character.created} 
                name={character.name} 
                dob={character.birth_year} 
                gender={character.gender} 
                height={character.height} 
                mass={character.mass} 
                hairColor={character.hair_color} 
                skinColor={character.skin_color} 
                created={character.created} 
                edited={character.edited} 
                parseDateTime={props.parseDateTime}
                />
            )
        })
    )
}

export default CharacterCards;