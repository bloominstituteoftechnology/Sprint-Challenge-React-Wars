import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
        <div className={`character ${props.characterOnProps.gender}`}>
            <p>Name: {props.characterOnProps.name}</p>
            <p>DOB: {props.characterOnProps.birth_year}</p>
            <p>Eye Color: {props.characterOnProps.eye_color}</p>
            <p>Hair Color: {props.characterOnProps.hair_color}</p>
        </div>
    )
}

export default Character;