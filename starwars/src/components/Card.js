import React from 'react';
import './StarWars.css';

const Card = props => {
    return (
        <div className="Card">
            <h3>{props.character.name}</h3> 
            <p style={{ color: 'green' }}>Birth Year: {props.character.birth_year}</p>
            <p style={{ color: 'blue' }}>Gender: {props.character.gender}</p> 
            <p style={{ color: 'red' }}>Eye Color: {props.character.eye_color}</p>
            <p style={{ color: 'purple' }}>Height: {props.character.height}</p> 
            <p style={{ color: 'orange' }}>Mass: {props.character.mass}</p>
            <p>Skin Color: {props.character.skin_color}</p>
        </div>
    )
}

export default Card;