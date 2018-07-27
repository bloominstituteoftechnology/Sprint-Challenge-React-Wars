import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <p>Name: {props.character.name}</p>
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Homeworld: {props.character.homeworld}</p>
            <p>Species: {props.character.species}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Eye Color: {props.character.eye_color}</p>
            <p>Hair Color: {props.character.hair_color}</p>
            <p>Skin Color: {props.character.skin_color}</p>
            <p>Height: {props.character.height}</p>
            <p>Mass: {props.character.mass}</p>
            <p>Starships: {props.character.starships}</p>
            <p>Vehicles: {props.character.vehicles}</p>
            <p>Films: {props.character.films}</p>
            <p>URL: {props.character.url}</p>
            <p>Created: {props.character.created}</p>
            <p>Edited: {props.character.edited}</p>                                             
        </div>
    )
}

export default Card;