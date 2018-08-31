import React, { Component } from 'react';
import StarWarsData from './StarWarsData';

const StarWarsCard = props => {
    return (
        <div className= "card-container">
            {props.starwarsChars.map(char => (
            <StarWarsData
                starwarsChars={char}
                key= {char.name}
            />  
            ))}
        </div>
    );
};


export default StarWarsCard;