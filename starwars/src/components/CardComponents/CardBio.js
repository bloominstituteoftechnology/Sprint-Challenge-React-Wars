import React from 'react';
import './Card.css';

const CardBio = (props) => {
    return (
        <div class='bio__container'>
            <h2 className='bio__name'>{props.name}</h2>
            <ul className='bio__list'>
            </ul>
        </div>
    );
}

export default CardBio;