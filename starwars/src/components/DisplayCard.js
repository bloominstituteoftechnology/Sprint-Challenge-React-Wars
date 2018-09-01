import React from 'react';
import './StarWars.css';

const DisplayCard = props => {
    return (
        <div className ='wholecard'>
        <h1>Who's Who of Combat</h1>
        <h1>
            {props.starwarsChars.map(starwarsChar => (
                starwarsChar.name
        
            ))}
        </h1>
        </div>
    );
};

export default DisplayCard;