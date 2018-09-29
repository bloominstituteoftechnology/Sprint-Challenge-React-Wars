import React from 'react';
import './StarWars.css';

const Card = props => {
    return (
        <div className="card">
            <h1>{props.character.name}</h1>
            <p>{props.character.gender}</p>
            <p>{props.character.birth_year}</p>
            <p>{props.character.height}</p>
            <p>{props.character.mass}</p>
            <p>{props.character.skin_color}</p>
            <p>{props.character.hair_color}</p>
            <p>{props.character.eye_color}</p>
        </div>
    )
}

export default Card;