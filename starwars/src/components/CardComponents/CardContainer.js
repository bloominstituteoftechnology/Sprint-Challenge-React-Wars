import React from 'react';
import './Card.css';
import CardBio from './CardBio';
import CardSummary from './CardSummary';

const CardContainer = (props) => {
    return (
        <div className='card-container'>
            <CardBio name={props.character.name} 
            gender={props.character.gender} 
            eye_color={props.character.eye_color}
            height={props.character.height}
            hair_color={props.character.hair_color} />
            <CardSummary />
        </div>
    );
}

export default CardContainer;