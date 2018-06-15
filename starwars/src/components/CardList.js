import React from 'react';
import Card from './Card';
import './StarWars.css';

const CardList = (props) => {
    console.log(props.info.starwarsChars[0]);
    let card = props.info.starwarsChars.map(card => (
    <Card 
        name={card.name}   
        key={Date.now() + Math.random()}
        mass={card.mass}
        height={card.height}
        gender={card.gender}
        eye_color={card.eye_color}
        birth_year={card.birth_year}
        skin_color={card.skin_color}
    />
))
    return(
        <div className="cardList">
            {card}
        </div>
    )
}

export default CardList;