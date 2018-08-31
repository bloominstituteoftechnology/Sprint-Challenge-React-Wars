import React, { Component } from 'react';
import StarWarsData from './StarWarsData';

const StarWarsCard = props => {
    return (
        <div>
            {props.starwarsChars.map(char => (
            <StarWarsData
            />  
            ))}
        </div>
    );
};


export default StarWarsCard;