import React from 'react';
import Card from './components/CardComponents';
import './StarWars.css';

const Data = props => {
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
        <div className="dataComponents">
            {card}
        </div>
    )
}

export default Data;
