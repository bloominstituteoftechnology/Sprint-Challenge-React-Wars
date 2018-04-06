import React from 'react';
//should display a list of cards with character info
const Cards = props => {
    return (
        <div className='cardData'>
            {props.name}
        </div>
    );
};

export default Cards;