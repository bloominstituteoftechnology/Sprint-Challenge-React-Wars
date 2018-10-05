import React from 'react';
import Card from './Card';
import './Card.css';

const CardList = props => {
    return (
        <div className='cardList'>
            {props.starwarsChars.map(item => {
                return <Card character={item} />
            })}
            {props.starwarsChars2.map(item => {
                return <Card character={item} />
            })}
        </div>
    );
}

export default CardList;