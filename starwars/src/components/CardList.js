import React from 'react';
import Card from "./Card";
import './StarWars.css';

const CardList = props => {
    return (
        <div className="cardList">
            { props.cardArray.map( e => <Card character={ e } />) }
        </div>
    )
}

export default CardList;