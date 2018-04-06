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
                </div> 
            {props.gender}
           <div>
            {props.height}
            </div>
            </div>
        </div>
    </div>
    );
};

export default Cards;