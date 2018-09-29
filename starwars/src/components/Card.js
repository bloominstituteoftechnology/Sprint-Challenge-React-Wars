import React from 'react';
import './StarWars.css';

const Card = (props) => {
    return (
        <div>
            <p>Hello there!</p>
            <div><p>Name</p>{props.character.name}</div>
            <div><p>Birth year</p>{props.character.birth_year}</div>
            <div><p>Home world</p>{props.character.homeworld}</div>
            <div><p>Gender</p>{props.character.gender}</div>
            <div><p>Height</p>{props.character.height}</div>
            <div><p>Mass</p>{props.character.mass}</div>
            <div><p>Skin color</p>{props.character.skin_color}</div>
            <div><p>Eye color</p>{props.character.eye_color}</div>
            <div><p>Hair color</p>{props.character.hair_color}</div>
        </div>
    )
}

export default Card;