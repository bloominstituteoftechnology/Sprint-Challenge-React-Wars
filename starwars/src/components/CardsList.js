import React from 'react';
import Card from './Card';
const CardsList = props => {
    return (
        <div>
        {props.starwarsChars.map(card => {
          return  <Card card={card} key={card}/>
        })}
        </div>
    );
};

export default CardsList;