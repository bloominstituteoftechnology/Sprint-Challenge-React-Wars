import React from 'react';
import './StarWars.css'


const Card = props => {
    return (
        <div className='card-body'>
            <h1 className='char-header'>{props.starwarsChar.name}</h1>
            <div className='char-attributes'>
                <span className='attribute'>Gender: {props.starwarsChar.gender}</span>
                <span className='attribute'>Height: {props.starwarsChar.height}</span>
                <span className='attribute'>Mass: {props.starwarsChar.mass}</span>
                <span className='attribute'>Birth Year: {props.starwarsChar.birth_year}</span>
            </div>
        </div>
    );
}
 
export default Card;