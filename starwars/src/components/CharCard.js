import React from 'react';

import './StarWars.css';


const CharCard = props => {
    return (
        <div className='warsContainer'>
            {props.data.map(character => {
                return (
                    <div className='starCard'>
                    <h1>{character.name}</h1>
                    <p>Gender: {character.gender}</p>
                    <p>Birth Year: {character.birth_year}</p>
                    <p>Hair Color: {character.hair_color}</p>
                    <p>Eye Color: {character.eye_color}</p>
                    <p>Height: {character.height}</p>
                    <p>Mass: {character.mass}</p>
                    </div> 
                )
            })}
                
        </div>
    )
}

export default CharCard;
