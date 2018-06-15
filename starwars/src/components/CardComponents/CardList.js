import React from 'react';
import './Card.css';
import CardContainer from './CardContainer';

const CardList = (props) => {
    return (
        <ul>
            {props.characters.map(char => <CardContainer character = {char}/>)}
        </ul>
    );
}

export default CardList;