import React from 'react';
import Card from './Card';
import './Card.css'

const CardList = props => {
    return (
        <div className="card-container"> {
            props.card.map(card => <Card card={card}/>)
        }
        </div>
    )
    
}

export default CardList;