import React from 'react';
import './Card.css';


const Card = props => {
  return (
    <li className="starwars-card">
      {Object.entries(props.charInfo).map((attribute) =>
        <p><h4>{attribute[0]}</h4> {attribute[1]}</p>
      )}
    </li>
  );
}

export default Card;
