import React from 'react';
import Card from './Card';

const CardList = props => {
    return(
        <div className="cardList">
            {props.starwars.map((item, index) => {
                return <Card index={index} key={index} starwars={item} />
            })}
           
        </div>
    )
}

export default CardList;