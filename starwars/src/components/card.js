import React from 'react';
import './StarWars.css'


const Card = props => {
    return (
        <div className='card-body'>
            <h1>{props.starwarsChar.name}</h1>
            <span>Gender: {props.starwarsChar.gender}</span>
            <span>Height: {props.starwarsChar.height}</span>
            <span>Weight: {props.starwarsChar.weight}</span>
        </div>
    );
}
 
export default Card;