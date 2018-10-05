import React from 'react';
// import './StarWars.css';
import Card from './Card';

const CardComponent = (props) => {
    return (
        <div className="character-cards">
            {props.starwarsChars.map(char => {
                return (
                    <div className="character-card">
                        <Card char={char} />
                    </div>
                )
            })}
        </div>
    )
}

export default CardComponent;