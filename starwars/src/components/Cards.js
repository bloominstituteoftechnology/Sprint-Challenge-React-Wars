import React from 'react';
import Card from './Card.js';

const Cards = (props)=>{
    return (
        <ul className="list">
            {
                props.charList.map((character)=>{
                    return (
                        <Card key={character.created} charData={character}/>
                    )
                })
            }
        </ul>
    )
}

export default Cards;