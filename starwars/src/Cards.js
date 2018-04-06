// Use  name, birth_year, gender, height, mass, eye_color, hair_color, skin_color, created, edited, 

import React from 'react';
import './Cards.css';

const Cards = props => {
    return (
        <div className = 'container'> 
            <div className = 'data'>
                <p> Name: {props.name} </p>
                <p> Birth Year:{props.birth_year} </p>
                <p> Gender: {props.gender} </p>
                <p> Height: {props.height} </p>
                <p> Weight: {props.mass} </p>
                <p> Eye Color: {props.eye_color} </p>
                <p> Hair Color: {props.hair_color} </p>
                <p> Skin Color: {props.skin_color} </p>
            </div>
        </div>
    )
}

export default Cards;
