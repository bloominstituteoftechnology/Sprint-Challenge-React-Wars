import React from 'react';
import './StarWars.css';

import CharCard from './charcard';

function StarCards(props) {
    return (
        <div>
            {props.cards.map( (card) => <CharCard cardData={card} key={Date.now() + (Math.round(Math.random() * 1000000000000000))} /> )}
        </div>
    );
}

export default StarCards;
