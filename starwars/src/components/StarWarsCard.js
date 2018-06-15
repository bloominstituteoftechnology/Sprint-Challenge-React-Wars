import React from 'react';

import './StarWars.css';

const starWarsCard = props => {
    return (
        <div className="starwars-card">
            {props.birthYear}
            {props.created}
            {props.edited}
            {props.eyeColor}
            {props.films}
            {props.gender}
            {props.hairColor}
            {props.height}
            {props.homeworld}
            {props.mass}
            {props.name}
            {props.skinColor}
            {props.species}
            {props.starships}
            {props.url}
            {props.vehicles}
        </div>
    );
};

export default starWarsCard;