import React from 'react'; 
import Character from './Character';

const CharacterList = props => {
    return props.list.map(character => { 
        return (
            <div className = "characterCard">
            <Character 
                header = {character.name}
                species = {character.species[0]}
                birthYear = {character.birth_year}
                eyeColor = {character.eye_color}
                hair = {character.hair_color}
                height = {character.height}
                mass = {character.mass}
                />
            </div>
        ) 
    })
}

export default CharacterList;