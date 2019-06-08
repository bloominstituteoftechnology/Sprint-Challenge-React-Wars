import React from 'react';
import Char from './char.js';

const DisplayCard = props => {
    console.log("displayCard props:", props);
    return (
        <div key={props.starwarsChars.created}>
        {props.starwarsChars.map(char => {
            return <Char props={props.starwarsChars} />
        })}
        </div>    
        );
};

export default DisplayCard;