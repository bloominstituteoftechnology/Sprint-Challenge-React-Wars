import React from 'react';
import './StarWars.css';

const CardInfo = (props) => {
    return (
        <div>
            {props.name}
            {props.height}
            {props.mass}
            {props.hair_color}
        </div>
    )
}

export default CardInfo;