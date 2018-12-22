import React from 'react';
import './StarWars.css'

const Card = props => {
    return (
        <div className="card-style">
            <p>Name: {props.name}</p>
            <p>DOB: {props.birth_year}</p>
            <p>Eye color: {props.eye_color}</p>
        </div>
    )
}

export default Card;