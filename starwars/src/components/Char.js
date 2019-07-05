import React from 'react';
import './StarWars.css';

const Char = props => {
    return (
            <div className="character-card-demo">
                <h3>Name: {props.char.name}</h3>
                <p>Birth Year: {props.char.birth_year} Eye Color: {props.char.eye_color} Gender: {props.char.gender}</p>
            </div> 
    );
};

export default Char;