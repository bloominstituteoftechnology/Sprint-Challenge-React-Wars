import React from 'react';
import Characters from './Characters'
import './StarWars.css'

 const Cards = (props) => {
    return (
        props.characters.map(character => {
            return (
                <Characters 
                key = {character.created} 
                name = {character.name} 
                dob = {character.birth_year} 
                gender = {character.gender} 
                height = {character.height} 
                mass = {character.mass} 
                hairColor = {character.hair_color} 
                skinColor = {character.skin_color} 
                />
            )
        })
    )
}

 export default Cards; 