import React from 'react';
import './StarWars.css';

const Cards = props => {
    return (
        <div className="card">
            <div className="name">
                <p>{props.character.name}</p>
            </div>
            <div className="stats">
                <p>{`Birth Year: ${props.character.birth_year}`}</p>
                <p>{`Gender: ${props.character.gender}`}</p>
                <p>{`Height: ${props.character.height}cm`}</p>
                <p>{`Mass: ${props.character.mass}kg`}</p>
                <p>{`Skin Color: ${props.character.skin_color}`}</p>
                <p>{`Hair Color: ${props.character.hair_color}`}</p>
            </div>
        </div>
    );
}

export default Cards;