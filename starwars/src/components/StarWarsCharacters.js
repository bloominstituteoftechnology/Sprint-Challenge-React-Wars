import React from 'react';
import './StarWars.css';

const StarWarsCharacters = props => {
    return (
    <div className="characterList">
    <div>{props.characterProps.name}</div>
    <div>{props.characterProps.hair_color}</div>
    <div>{props.characterProps.eye_color}</div>
    <div>{props.characterProps.gender}</div>
    <div>{props.characterProps.birth_year}</div>
    </div>
    );
}

export default StarWarsCharacters;