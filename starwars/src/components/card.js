import React from 'react';
import './StarWars.css';

const Card = props => {
    return (
        <div className="card">
            <h2>{props.eachCard.name}</h2>
            <p>Gender: {props.eachCard.gender}</p>
            <p>Birth year: {props.eachCard.birth_year}</p>
            <p>Height: {props.eachCard.height}</p>
            <p>Mass: {props.eachCard.mass}</p>
            <p>Hair Color: {props.eachCard.hair_color}</p>
            <p>Eye Color: {props.eachCard.eye_color}</p>
            <p>Skin Color: {props.eachCard.skin_color}</p>
            
        </div>
    );
}

export default Card;
