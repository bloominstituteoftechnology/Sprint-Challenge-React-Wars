import React from 'react';
import './Card.css';

const Char = props => {
    return (
        <div className='card'>
        <h2 className='name'>{props.swChar.name}</h2>
        <p>Gender: {props.swChar.gender}</p>
        <p>Height: {props.swChar.height}</p>
        <p>Eye Color: {props.swChar.eye_color}</p>
        <p>Skin Color: {props.swChar.skin_color}</p>
        </div>
    )
}

export default Char;