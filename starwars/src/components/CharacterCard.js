import React from 'react';
import './StarWars.css';

const CharacterCard = props => {
    return (
        <div className="character-card">
            Name: {props.name}
            Birth Year: {props.birth_year}
        </div>
    );
};

export default CharacterCard;