import React from 'react';
import './StarWars.css';

const StarWarsCard = props => {
    return (
        <div>
            {props.starwarsChars}
        </div>
    );
};

export default StarWarsCard;