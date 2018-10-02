import React from 'react';
import './StarWars.css';

const Card = props => {
    return (
        <div className="card">
            <h1>{props.character.name}</h1>
            <div className="content-medium">
                <p><span>Height:</span> {props.character.height}</p>
                <p><span>Mass:</span> {props.character.mass}</p>
            </div>
            <div className="content-medium">
                <p><span>Gender:</span> {props.character.gender}</p>
                <p><span>Birth Year:</span> {props.character.birth_year}</p>
            </div>
            <div className="content-bottom">
                <p><span>Skin Color:</span> {props.character.skin_color}</p>
                <p><span>Hair Color:</span> {props.character.hair_color}</p>
                <p><span>Eye Color:</span> {props.character.eye_color}</p>
            </div>
        </div>
    )
}

export default Card;