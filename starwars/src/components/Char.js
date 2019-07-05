import React from 'react';
import './StarWars.css';

const Char = props => {
    return (
        <div className="charCard">
        <p className="name"> Name: {props.stwrChar.name} </p>
        <p> Gender: {props.stwrChar.gender} </p>
        <p> EyeColor: {props.stwrChar.eye_color} </p>
        <p> Hair: {props.stwrChar.hair_color} </p>
        <p> Height: {props.stwrChar.height} </p>
        <p> Birth: {props.stwrChar.birth_year} </p>
      
        </div>
    );
};

export default Char;