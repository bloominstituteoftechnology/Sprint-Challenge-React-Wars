import React from 'react';
import Characters from './Character'
const CharacterList = (props) => {
    console.log(props)
    return(
        props.listOfChar.map(char =>  
        <Characters 
        name = {char.name} 
        height = {char.height}
        mass = {char.mass}
        hairColor = {char.hairColor}
        skinColor = {char.skinColor}
        eyeColor = {char.eyeColor}
        birthYear = {char.birthYear}
        gender = {char.gender}
        />
        )
    )
}

export default CharacterList;