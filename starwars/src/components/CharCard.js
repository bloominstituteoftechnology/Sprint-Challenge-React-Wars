import React from 'react';

const CharCard = props => {
    return (
        <div className='warsContainer'>
            {props.data.map(character => {
                <div className='starCard'>
                <h1>{character.name}</h1>
                <p>Gender: {character.gender}</p>
                <p>Birth Year: {character.birth_year}</p>
                <p>Home World: {character.homeworld}</p>
                <p>Species: {character.species}</p>
                <p>Vehicles: {character.vehicles}</p>
                <p>Starships: {character.starships}</p>
                <p>Films: {character.films}</p>
                </div>
            })}
        </div>
    )
}

export default CharCard;
