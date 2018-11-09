import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
        <div>
            <div className="character-card">
                <h3>{props.character.name}</h3>
                <ul>
                    <li>Birth Year: {props.character.birth_year}</li>
                    <li>Gender: {props.character.gender}</li>
                    <li>Hair Color: {props.character.hair_color}</li>
                    <li>Mass: {props.character.mass}</li>
                </ul>
            </div>
        </div>
    )
}

export default Character;