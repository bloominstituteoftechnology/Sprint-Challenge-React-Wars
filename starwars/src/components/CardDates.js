import React from 'react';
import './StarWars.css';

const CardDates = props => {
    return (
        <div className="custom-date">
            <p><strong>Created: </strong>{props.character.created}</p>
            <p><strong>Edited: </strong>{props.character.edited}</p>
        </div>
    )
}

export default CardDates;