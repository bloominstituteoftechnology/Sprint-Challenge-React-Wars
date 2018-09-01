import React from 'react'; 
import Character from './Character';

const CharacterList = props => {
    return props.list.map(character => { 
        return (
            <div className ={`characterCard  ${character.name.replace(" ", "")}`}>
            <Character 
                header = {character.name}
                birthYear = {character.birth_year}
                gender = {character.gender}
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