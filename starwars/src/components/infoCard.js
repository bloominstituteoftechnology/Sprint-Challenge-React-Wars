import React from 'react';
import card from './card';
import './StarWars.css';

const infoCard = props => {
    return (
        <div className="infoCard">
            {props.starwarsChars.map(character => {
                return <card key={character.created} characterInfo={character}/>
            })}
        </div>
    );
};

export default infoCard;