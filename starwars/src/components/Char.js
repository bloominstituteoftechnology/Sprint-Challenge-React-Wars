import React from 'react';
import './StarWars.css';

const Char = props => {
    return (
        <div className="charCard">
        <p> Name: {props.stwrChar.name} </p>
        </div>
    );
};

export default Char;