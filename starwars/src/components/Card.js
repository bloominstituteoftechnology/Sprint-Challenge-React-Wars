import React from 'react';
import CardInfo from './CardInfo';

const Card = props => {
    return (
        <div className='card'>
            <CardInfo character={props.character}/>
        </div>
    )
}

export default Card;