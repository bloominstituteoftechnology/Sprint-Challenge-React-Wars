import React from 'react';
import './StarWars.css';
const StarWars = props => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Gender: {props.gender}</p>
            <p>DOB: {props.dob}</p>
            <p>Height: {props.height}</p>
            <p>Hair: {props.hair}</p>
            <p>Skin: {props.skin}</p>
            <p>Eye Color: {props.eyes}</p>
            
        </div>
    );
};
export default StarWars;