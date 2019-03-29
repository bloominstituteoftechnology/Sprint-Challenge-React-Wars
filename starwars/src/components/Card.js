import React from 'react';
import './StarWars.css';

const Card = props => {
    return (
        <div className="card">
            <h1>{props.character.name}</h1>
            <div className="content-medium">
                <p>Height: {props.character.height}</p>
                <p>Mass: {props.character.mass}</p>
            </div>
            <div className="content-medium">
                <p>Gender: {props.character.gender}</p>
                <p>Birth Year: {props.character.birth_year}</p>
            </div>
            <div className="content-bottom">
                <p>Skin Color: {props.character.skin_color}</p>
                <p>Hair Color: {props.character.hair_color}</p>
                <p>Eye Color: {props.character.eye_color}</p>
            </div>
        </div>
    )
}

export default Card;