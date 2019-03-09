import React from 'react';
import './StarWars.css';

const StarWarsCharacters = props => {
    return (
    <div className="CharacterList">
    <div className="WantedProps">
    <h2 className="Name">{props.characterProps.name}</h2>
    <div>Hair Color: {props.characterProps.hair_color}</div>
    <div>Eye Color: {props.characterProps.eye_color}</div>
    <div>Gender: {props.characterProps.gender}</div>
    <div>Year Born: {props.characterProps.birth_year}</div>
    </div>
    </div>
    );
}

export default StarWarsCharacters;