import React from 'react';
import "./StarWars.css";

const Card = props => {
    return (
        <div className="card">
            <p> { props.character.name } </p>
        </div>
    )
}

export default Card;