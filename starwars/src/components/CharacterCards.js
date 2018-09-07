import React from 'react';
import './StarWars.css';

const CharacterCards = props => {
    return (
        <div className="cards">
        <h2>{props.characters.name}</h2>
        <h2>Height: {props.characters.height}</h2>
        <h2>Mass: {props.characters.mass}</h2>
        <h2>Hair Color: {props.characters.hair_color}</h2>
        <h2>Eye Color: {props.characters.eye_color}</h2>
        <h2>Birth Year: {props.characters.birth_year}</h2>
        <h2>Gender: {props.characters.gender}</h2>
        </div>
    );
};

export default CharacterCards;