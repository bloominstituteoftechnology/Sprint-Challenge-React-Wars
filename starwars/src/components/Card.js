import React from 'react';
import './StarWars.css';

const Card = props => {
    return (
        <div className="Card">
            <h3>{props.character.name}</h3> 
            <p>{props.character.birth_year}</p>
            <p>{props.character.gender}</p> 
            <p>{props.character.eye_color}</p>
            <p>{props.character.height}</p> 
            <p>{props.character.height}</p>
            <p>{props.character.mass}</p>
            <p>{props.character.skin_color}</p>
        </div>
    )
}

export default Card;