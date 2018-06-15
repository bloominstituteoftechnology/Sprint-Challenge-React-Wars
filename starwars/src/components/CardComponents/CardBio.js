import React from 'react';
import './Card.css';

const CardBio = (props) => {
    return (
        <div class='bio__container'>
            <h2 className='bio__name'>{props.name}</h2>
            <h3 className='bio__info'>Bio Information</h3>
            <ul className='bio__list'>
                <li className = 'bio__item'>Gender: {props.gender}</li>
                <li className = 'bio__item'>Eye Color: {props.eye_color}</li>
                <li className = 'bio__item'>Height: {props.height}</li>
                <li className = 'bio__item'>Hair Color: {props.hair_color}</li>
            </ul>
        </div>
    );
}

export default CardBio;