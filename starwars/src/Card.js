import React from 'react'
import './Card.css';

const Card = ({ card }) => {
    return (
        <div className="Card">
          <p>
            {card.name}   
          </p>
          <p>Eye Color: {card.eye_color}</p>
          <p>Birth Year: {card.birth_year}</p>
          <p>Height: {card.height}</p>
        </div>
      ); 
}
 
export default Card;