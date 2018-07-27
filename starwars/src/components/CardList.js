import React from 'react';
import Card from "./Card";
import './StarWars.css';

const CardList = props => {
    return (
        <div className="cardList">
            { props.cardArray.map( e => <Card key={ e.created } character={ e } />) }
        </div>
    )
}

export default CardList;