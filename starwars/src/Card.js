import React from 'react'
import './Card.css';


const Card = ({ card, i }) => {
    return (
     <div className="card">
          <p>
            {card.name}   
          </p>
          <p>Eye Color: {card.eye_color}</p>
          <p>Birth Year: {card.birth_year}</p>
          <p>Height: {card.height}</p>
            <p>{card.homeworld}</p>
            <p>{card.mass}</p>
            <p>{card.species}</p>
          
        </div>
      ); 
}
 
export default Card;