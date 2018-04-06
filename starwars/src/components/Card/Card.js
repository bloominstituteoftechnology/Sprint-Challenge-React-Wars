import React from 'react';
import './Card.css';
//should display a list of cards with character info
const Cards = props => {
    return (
    <div className='cardBox'>
        <div className='cardContainer'>
        <div className='cardData'>
        <div>
            {props.name}
            </div> <div>
            {props.birth_year}
            </div> <div>
            {props.gender}
            </div> <div>
            {props.height}
            </div> <div>
            {props.mass}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Cards;