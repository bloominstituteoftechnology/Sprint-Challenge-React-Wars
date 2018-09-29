import React from 'react';
import './StarWars.css';
import Card from './Card';

const CardComponent = (props) => {
    return (
        <div className="character-cards">
            {/* Takes as input (from props) each of the todos in state, iterates through
            (using .map), and renders them onscreen. */}
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