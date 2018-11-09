import React from 'react';
import Characters from './Character'
import './StarWars.css';

const CharacterList = (props) => {
    return(
        props.listOfChar.map((char,i) =>       
        <Characters 
        key = {i}
        name = {char.name} 
        height = {char.height}
        mass = {char.mass}
        hairColor = {char.hair_color}
        skinColor = {char.skin_color}
        eyeColor = {char.eye_color}
        birthYear = {char.birth_year}
        gender = {char.gender}
        created = {char.created}
        edited = {char.edited}
        />
        )
    )
}

export default CharacterList;