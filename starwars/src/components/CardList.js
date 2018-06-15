import React from 'react';
import Card from './Card';
import './StarWars.css';

const CardList = (props) => {
    return (
        <div className="cards-container">
          {props.starwarsChars.map((character,index) => <Card character={character} index={index}/>)}
        </div>
    )
}

export default CardList;