import React from 'react';
import Card from './Card';
import './StarWars.css';

const CardsList = (props) => {
    return (
        <div>
            {props.starwarsChars.map((character, index) => <Card key={index} character={character} id={index} />)}
        </div>
    )
}

export default CardsList;