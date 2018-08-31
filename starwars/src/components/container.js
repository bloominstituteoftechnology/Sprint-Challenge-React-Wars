import React from 'react';
import charCards from './charCards.';
import './StarWars.css';

const container = (props) => {
    return (
        <div className="cardContainer">
            {props.traits.map(index => {
                return <charCards attribute={index} 
                />;
            })}
        </div> 
    );
};

export default container;