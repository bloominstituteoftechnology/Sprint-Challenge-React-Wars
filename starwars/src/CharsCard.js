import React from 'react'
//build a card of characters
const CharsCard = props => {
    return (
        <div className="Card"> 
            <h2>Character name: {props.name}</h2>
            <p>Birth year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
        </div>
    );
};

export default CharsCard;