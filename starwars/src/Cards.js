// Use  name, birth_year, gender, height, mass, eye_color, hair_color, skin_color, created, edited, 

import React from 'react';
import './Cards.css';

const Cards = props => {
    return (
        <div className = 'container'> 
            <p> {props.name} </p>
            <p> {props.birth_year} </p>
            <p> {props.gender} </p>
            <p> Height: {props.height} </p>
            <p> Weight: {props.mass} </p>
            <p> Eye Color: {props.eye_color} </p>
            <p> Hair Color: {props.hair_color} </p>
            <p> Skin Color: {props.skin_color} </p>
        </div>
    )
}

export default Cards;
