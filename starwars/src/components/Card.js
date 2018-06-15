import React from 'react';
import './StarWars.css';

const Card = (props) => {
    let charObj = props.character;
    let characterArr = Object.keys(props.character);
    let cardId = 'card' + String(props.id);

    return (
        <div className='card' id={cardId} onClick={() => props.onClick(cardId)}>
            <h2>{props.character.name}</h2>
            <div className="card-content" >{characterArr.map((key,index) => <p key={index}>{key.replace('_', ' ').toUpperCase()}: {props.character[key]}</p>)}</div>
        </div>
    );
}

export default Card;