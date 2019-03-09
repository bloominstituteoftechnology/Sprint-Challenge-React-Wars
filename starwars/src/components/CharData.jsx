import React from 'react';
import './StarWars.css';

const Character = (props) => {
    return (
        <div className="character">
            <h2>{props.character.name}</h2>
            <ul>
                <li>Gender: {props.character.gender}</li>
                <li>Height: {props.character.height}</li>
                <li>Mass: {props.character.mass}</li>
                <li>Birth Year: {props.character.birth_year}</li>
                <li>Eye Color: {props.character.eye_color}</li>
                <li>Films: {props.character.films}</li>
                <li>Gender: {props.character.gender}</li>
                <li>Hair Color: {props.character.hair_color}</li>
                <li>Homeworld: {props.character.homeworld}</li>
                <li>Skin Color: {props.character.skin_color}</li>
                <li>Species: {props.character.species}</li>
                <li>Starships: {props.character.starships}</li>
                <li>Vehicles: {props.character.vehicles}</li>
            </ul>
        </div>
    );
}

export default Character;