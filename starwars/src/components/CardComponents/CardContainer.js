import React from 'react';
import './Card.css';
import CardBio from './CardBio';
import CardSummary from './CardSummary';

const CardContainer = (props) => {
    return (
        <div className = 'card-container'>
        <CardBio name={props.character.name} />
        <CardSummary />
        </div>
    );
}

export default CardContainer;