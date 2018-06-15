import React from 'react';
import './Card.css';


const Card = props => {
  return (
    <li className="starwars-card">
      {Object.entries(props.charInfo).map((attribute) =>
        <p key={Date.now() + Math.random()}><b>{attribute[0]}</b> {attribute[1]}</p>
      )}
    </li>
  );
}

export default Card;
