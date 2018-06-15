import React from 'react';
import './StarWars.css';

const Card = (props) => {
    let charObj = props.character;
    let characterArr = Object.keys(props.character)


    return (
        <div className='card'>
            <h2>{props.character.name}</h2>
            <div className="card-content" key={props.index}>{characterArr.map(key => <p>{key.replace('_', ' ').toUpperCase()}: {props.character[key]}</p>)}</div>
        </div>
    );
}

export default Card;