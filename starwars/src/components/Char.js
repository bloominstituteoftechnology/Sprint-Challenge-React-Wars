import React from 'react';
import './StarWars.css';

const Char = props => {
    return <div className= "card-wrapper">
        <div>{props.char.name}</div>
        <div>{props.char.birth_year}</div>
        <div>{props.char.eye_color}</div>
        <div>{props.char.gender}</div>
        <div>{props.char.birth_year}</div>
      </div>;
}

export default Char;