import React from 'react';
import './StarWars.css';

const StarWarsCard = props => {
    return (
        <div className="starwars-card">
            {props.cards.name}
            {props.cards.height}
            {props.cards.mass}
            {props.cards.hair_color}
            {props.cards.skin_color}
            {props.cards.eye_color}
            {props.cards.birth_year}
            {props.cards.gender}
            {/* {props.cards.species}
            {props.cards.vehicles}
            {props.cards.starships} */}
            {props.cards.created}
            {props.cards.edited}
        </div>
    );
};

export default StarWarsCard;