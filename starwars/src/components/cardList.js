import React from 'react';
import './StarWars.css';
import Stats from './cards';

const CardsList = (props) => {
    return(
        <div className='cardList'>
            {props.starwarsChars.map( info => {
                return(
                    <Stats key = {info.created} info = {info} />
                );
            })};
        </div>
    );
};

export default CardsList;