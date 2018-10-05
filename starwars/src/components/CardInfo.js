import React from 'react';
import './CardStyling.css';

const CardInfo = (props) => {
    return (
        <div className='cardInfo'>
            <div>
                <p>Birth: {props.character.birth_year}</p>
                <p>Height: {props.character.height}</p>
                <p>Mass: {props.character.mass}</p>
            </div>
            <div>
                <p>Gender: {props.character.gender}</p>
                <p>Hair Color: {props.character.hair_color}</p>
                <p>Eye Color: {props.character.eye_color}</p>
            </div>
        </div>
    )
}

export default CardInfo;