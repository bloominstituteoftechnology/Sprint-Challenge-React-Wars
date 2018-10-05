import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
        <div className="character" id={props.index}>
            <h1>{props.character.name}</h1>
            <ul>
                <li>{props.character.height}</li>
                <li>{props.character.mass}</li>
                <li>{props.character.hair_color}</li>
                <li>{props.character.birth_year}</li>

            </ul>
        </div>
    )
}

export default Character;