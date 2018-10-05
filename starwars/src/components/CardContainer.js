import React from 'react';
import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import CardInfo from './CardInfo';
import './CardStyling.css';

const CardContainer = (props) => {
    return (
        <div className='cardContainer'>
            {props.starwarsChars.map(char => {
                return (
                    <div className="card">
                        <CardHeader character={char} />
                        <CardMedia character={char} />
                        <CardInfo character={char} />
                    </div>
                );
            })}
        </div>
    );
}

export default CardContainer;