import React from 'react';
import './StarWars.css';

const Card = props => {
    return (
        <div className="card">
            {props.character.name}
        </div>
    )
}

export default Card;